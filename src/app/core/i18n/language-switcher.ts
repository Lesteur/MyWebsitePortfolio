import { Component, inject } from '@angular/core';
import { isLanguageCode } from './languages';
import { I18nService } from './i18n.service';
import { TranslatePipe } from './translate.pipe';

@Component({
  selector: 'app-language-switcher',
  imports: [TranslatePipe],
  template: `
    <label for="language-select" class="visually-hidden">{{ 'language.label' | translate }}</label>
    <select id="language-select" (change)="onChange($event)">
      @for (language of i18n.languages; track language.code) {
        <option
          [value]="language.code"
          [lang]="language.code"
          [selected]="language.code === i18n.lang()"
        >
          {{ language.label }}
        </option>
      }
    </select>
  `,
})
export class LanguageSwitcher {
  protected readonly i18n = inject(I18nService);

  protected onChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (isLanguageCode(value)) void this.i18n.use(value);
  }
}