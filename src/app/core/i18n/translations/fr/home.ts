import type { home as enHome } from '../en/home';

export const home: Record<keyof typeof enHome, string> = {
  'hero.eyebrow': 'Ingénieur informatique',
  'hero.greeting': 'Bonjour, je suis',
  'hero.name': 'Adam Ibnouzahir',
  'hero.tagline': 'Je suis spécialisé dans le développement de logiciels rapides, dans le système embarqué et dans la réalité virtuelle.',
  'hero.cta.projects': 'Voir mes réalisations',
  'hero.cta.contact': 'Me contacter',

  'about.title': 'À propos de moi',
  'about.paragraph1':
    "Je suis actuellement étudiant à l'ISIMA. Je suis passionné par l'informatique\
    depuis l'école primaire quand j'ai commencé à programmer avec Scratch. Cette\
    passion m'a ensuite poussé à explorer davantage ce domaine et à découvrir les\
    langages de programmation en commençant par Python et Java.",
  'about.paragraph2':
    "Je m'intéresse à beaucoup de choses dans l'informatique et la technologie,\
    que ce soit la réalité virtuelle, les systèmes embarqués et le développement\
    de logiciels. J'ai pu développé un attrait pour les cartes électroniques en\
    travaillant avec Arduino.",
  'about.skills': 'Compétences',
  'about.cv': 'Télécharger mon CV (PDF)',

  'contact.title': 'Contact',
  'contact.text': "Si vous avez une opportunité à me proposer, n'hésitez pas à m'envoyer un mail.",
  'contact.cta': 'Envoyer un e-mail',
};