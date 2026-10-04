import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { I18nService } from './core/i18n/i18n.service';
import { PageTitle } from './core/title/page-title';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // Anchors (#projects) work, and each navigation starts at the top of the page
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
      // Route params (:id) are bound directly to component inputs
      withComponentInputBinding(),
    ),
    provideAppInitializer(() => inject(I18nService).init()),
    // Create the service eagerly so the tab title follows the language from the start
    provideAppInitializer(() => {
      inject(PageTitle);
    }),
  ],
};