import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LanguageSwitcher } from './core/i18n/language-switcher';
import { TranslatePipe } from './core/i18n/translate.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, LanguageSwitcher, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}