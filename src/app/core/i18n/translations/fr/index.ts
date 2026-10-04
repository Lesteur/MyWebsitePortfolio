import type { Translations } from '../en';
import { common } from './common';
import { home } from './home';
import { projects } from './projects';

// Fails to compile if any key is missing or unknown
export const translations: Translations = { ...common, ...home, ...projects };