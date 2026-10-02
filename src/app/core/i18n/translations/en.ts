export const translations = {
  'app.title': 'My Portfolio',
  'a11y.skipToContent': 'Skip to main content',
  'nav.label': 'Main navigation',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'language.label': 'Language',

  'hero.eyebrow': 'Software developer',
  'hero.greeting': "Hi, I'm",
  'hero.name': 'Your Name',
  'hero.tagline': 'I build fast, accessible and maintainable software.',
  'hero.cta.projects': 'View my work',
  'hero.cta.contact': 'Get in touch',

  'projects.title': 'Projects',
  'projects.intro': 'A selection of things I have built.',
  'projects.view': 'View project',
  'projects.one.title': 'Project One',
  'projects.one.description': 'A short description of what this project does and why it matters.',
  'projects.two.title': 'Project Two',
  'projects.two.description': 'A short description of what this project does and why it matters.',
  'projects.three.title': 'Project Three',
  'projects.three.description': 'A short description of what this project does and why it matters.',

  'contact.title': 'Contact',
  'contact.text': 'Have a project in mind or just want to say hello? Send me an email.',
  'contact.cta': 'Send an email',

  'footer.text': 'Built with Angular.',
} as const satisfies Record<string, string>;

export type TranslationKey = keyof typeof translations;
export type Translations = Record<TranslationKey, string>;