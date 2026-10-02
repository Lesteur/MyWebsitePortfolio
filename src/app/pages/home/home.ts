import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import type { TranslationKey } from '../../core/i18n/translations/en';

interface Project {
  readonly id: string;
  readonly titleKey: TranslationKey;
  readonly descriptionKey: TranslationKey;
  readonly tags: readonly string[];
  /** Optional: when set, a "View project" link is rendered */
  readonly url?: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly email = 'hello@example.com';

  // Titles and descriptions are translation keys; tags are language-neutral
  protected readonly projects: readonly Project[] = [
    {
      id: 'one',
      titleKey: 'projects.one.title',
      descriptionKey: 'projects.one.description',
      tags: ['Angular', 'TypeScript'],
    },
    {
      id: 'two',
      titleKey: 'projects.two.title',
      descriptionKey: 'projects.two.description',
      tags: ['C#', 'MonoGame'],
    },
    {
      id: 'three',
      titleKey: 'projects.three.title',
      descriptionKey: 'projects.three.description',
      tags: ['Node.js', 'PostgreSQL'],
    },
  ];
}