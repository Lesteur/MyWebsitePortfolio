import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';
import { DEFAULT_LANGUAGE, isLanguageCode, LANGUAGES, LanguageCode } from './languages';
import type { Translations, TranslationKey } from './translations/en';

const STORAGE_KEY = 'app.language';

export type TranslationParams = Record<string, string | number>;

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);

  /** Loaded dictionaries are cached so switching back is instant */
  private readonly cache = new Map<LanguageCode, Translations>();
  private readonly dictionary = signal<Partial<Translations>>({});
  private readonly currentLang = signal<LanguageCode>(DEFAULT_LANGUAGE);
  /** Guards against out-of-order loads when the user switches quickly */
  private latestRequest = 0;

  readonly lang = this.currentLang.asReadonly();
  readonly languages = (Object.keys(LANGUAGES) as LanguageCode[]).map((code) => ({
    code,
    label: LANGUAGES[code].label,
  }));

  /** Called once at startup by the app initializer */
  init(): Promise<void> {
    return this.use(this.detectLanguage());
  }

  async use(code: LanguageCode): Promise<void> {
    const request = ++this.latestRequest;

    let dict = this.cache.get(code);
    if (!dict) {
      dict = (await LANGUAGES[code].load()).translations;
      this.cache.set(code, dict);
    }
    if (request !== this.latestRequest) return; // a newer request superseded this one

    this.dictionary.set(dict);
    this.currentLang.set(code);
    this.document.documentElement.lang = code; // keeps screen readers and spellcheck correct
    this.persist(code);
  }

  /** Reads the signal, so any template calling it re-renders on language change */
  t(key: TranslationKey, params?: TranslationParams): string {
    const value = this.dictionary()[key] ?? key; // fall back to the key itself
    if (!params) return value;
    return value.replace(/\{(\w+)\}/g, (match, name: string) =>
      name in params ? String(params[name]) : match,
    );
  }

  private detectLanguage(): LanguageCode {
    const win = this.document.defaultView;

    try {
      const stored = win?.localStorage.getItem(STORAGE_KEY);
      if (isLanguageCode(stored)) return stored;
    } catch {
      // Storage can be blocked (privacy mode); ignore and keep detecting
    }

    for (const tag of win?.navigator.languages ?? []) {
      const base = tag.split('-')[0].toLowerCase();
      if (isLanguageCode(base)) return base;
    }
    return DEFAULT_LANGUAGE;
  }

  private persist(code: LanguageCode): void {
    try {
      this.document.defaultView?.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // Non-critical
    }
  }
}