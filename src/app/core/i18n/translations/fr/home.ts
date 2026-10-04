import type { home as enHome } from '../en/home';

export const home: Record<keyof typeof enHome, string> = {
  'hero.eyebrow': 'Développeur logiciel',
  'hero.greeting': 'Bonjour, je suis',
  'hero.name': 'Votre Nom',
  'hero.tagline': 'Je conçois des logiciels rapides, accessibles et maintenables.',
  'hero.cta.projects': 'Voir mes réalisations',
  'hero.cta.contact': 'Me contacter',

  'about.title': 'À propos de moi',
  'about.paragraph1':
    'Racontez votre parcours ici : qui vous êtes, où vous vivez et ce qui vous motive.',
  'about.paragraph2':
    'Ajoutez un second paragraphe sur votre expérience, votre façon de travailler et ce que vous recherchez.',
  'about.skills': 'Compétences',
  'about.cv': 'Télécharger mon CV (PDF)',

  'contact.title': 'Contact',
  'contact.text': 'Un projet en tête, ou simplement envie de dire bonjour ? Envoyez-moi un e-mail.',
  'contact.cta': 'Envoyer un e-mail',
};