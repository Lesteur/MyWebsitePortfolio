import { common } from './common';
import { home } from './home';
import { projects } from './projects';

// Keys are prefixed per section (app., nav., hero., projects., ...) so spreading never collides
export const translations = { ...common, ...home, ...projects } as const;

// Every key used anywhere in the app is derived from the English dictionary
export type TranslationKey = keyof typeof translations;
export type Translations = Record<TranslationKey, string>;