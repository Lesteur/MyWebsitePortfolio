import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { findProject } from '../../core/projects/projects.data';
import { PageTitle } from '../../core/title/page-title';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  /** Bound from the :id route parameter (withComponentInputBinding) */
  readonly id = input.required<string>();

  protected readonly project = computed(() => findProject(this.id()));

  private readonly heading = viewChild<ElementRef<HTMLElement>>('heading');
  private readonly pageTitle = inject(PageTitle);

  constructor() {
    // Tab title follows the project and the language
    effect(() => this.pageTitle.set(this.project()?.titleKey ?? null));
    inject(DestroyRef).onDestroy(() => this.pageTitle.set(null));

    // Move focus to the heading so keyboard and screen reader users land on the new content
    afterNextRender(() => this.heading()?.nativeElement.focus());
  }
}