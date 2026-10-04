import type { projects as enProjects } from '../en/projects';

export const projects: Record<keyof typeof enProjects, string> = {
  'projects.title': 'Projets',
  'projects.intro': 'Une sélection de ce que j’ai réalisé.',
  'projects.view': 'Voir le projet',

  'projectDetail.back': 'Retour aux projets',
  'projectDetail.role': 'Rôle',
  'projectDetail.year': 'Année',
  'projectDetail.technologies': 'Technologies',
  'projectDetail.repo': 'Code source',
  'projectDetail.demo': 'Démo en ligne',
  'projectDetail.notFound': 'Ce projet n’existe pas.',

  'projects.one.title': 'Projet Un',
  'projects.one.summary': 'Une courte description de ce que fait ce projet et de son intérêt.',
  'projects.one.description':
    'Une description plus détaillée : le problème résolu, les principales décisions techniques et ce que vous avez appris.',
  'projects.one.role': 'Développeur principal',

  'projects.two.title': 'Projet Deux',
  'projects.two.summary': 'Une courte description de ce que fait ce projet et de son intérêt.',
  'projects.two.description':
    'Une description plus détaillée : le problème résolu, les principales décisions techniques et ce que vous avez appris.',
  'projects.two.role': 'Développeur en solo',

  'projects.three.title': 'Projet Trois',
  'projects.three.summary': 'Une courte description de ce que fait ce projet et de son intérêt.',
  'projects.three.description':
    'Une description plus détaillée : le problème résolu, les principales décisions techniques et ce que vous avez appris.',
  'projects.three.role': 'Développeur back-end',
};