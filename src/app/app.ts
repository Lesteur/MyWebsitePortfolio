import { Component, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';
import { I18nService } from './core/i18n/i18n.service';
import { LanguageSwitcher } from './core/i18n/language-switcher';
import { TranslatePipe } from './core/i18n/translate.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, LanguageSwitcher, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly title = inject(Title);
  private readonly i18n = inject(I18nService);

  // Keeps the browser tab title in sync with the active language
  private readonly titleSync = effect(() => this.title.setTitle(this.i18n.t('app.title')));
}