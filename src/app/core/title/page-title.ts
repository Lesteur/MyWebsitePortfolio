import { effect, inject, Injectable, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { I18nService } from '../i18n/i18n.service';
import type { TranslationKey } from '../i18n/translations/en';

@Injectable({ providedIn: 'root' })
export class PageTitle {
  private readonly browserTitle = inject(Title);
  private readonly i18n = inject(I18nService);

  /** Page-specific part of the title; null means "site title only" */
  private readonly pageKey = signal<TranslationKey | null>(null);

  // Re-runs when the language or the page changes
  private readonly sync = effect(() => {
    const key = this.pageKey();
    const site = this.i18n.t('app.title');
    this.browserTitle.setTitle(key ? `${this.i18n.t(key)} – ${site}` : site);
  });

  set(key: TranslationKey | null): void {
    this.pageKey.set(key);
  }
}