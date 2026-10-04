import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n/i18n.service';
import type { LanguageCode } from '../../core/i18n/languages';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { PROJECTS } from '../../core/projects/projects.data';

/**
 * Résumé files live in /public/cv/ and are served from the site root.
 * Add an entry when you add a language (reuse an existing file if you have no translated résumé).
 */
const CV_FILES: Record<LanguageCode, string> = {
  en: 'cv/cv-en.pdf',
  fr: 'cv/cv-fr.pdf',
};

@Component({
  selector: 'app-home',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly i18n = inject(I18nService);

  protected readonly email = 'hello@example.com';
  protected readonly skills = ['Angular', 'TypeScript', 'HTML & CSS', 'Git'];
  protected readonly projects = PROJECTS;

  /** The résumé matches the active language */
  protected readonly cvUrl = computed(() => CV_FILES[this.i18n.lang()]);
}