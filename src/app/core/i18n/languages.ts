import type { Translations } from './translations/en';

interface LanguageDefinition {
  /** Name displayed in the language's own tongue */
  readonly label: string;
  /** Lazy loader: each language becomes its own chunk */
  readonly load: () => Promise<{ translations: Translations }>;
}

export const LANGUAGES = {
  en: { label: 'English', load: () => import('./translations/en') },
  fr: { label: 'Français', load: () => import('./translations/fr') },
} as const satisfies Record<string, LanguageDefinition>;

export type LanguageCode = keyof typeof LANGUAGES;

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

export function isLanguageCode(value: unknown): value is LanguageCode {
  return typeof value === 'string' && Object.hasOwn(LANGUAGES, value);
}