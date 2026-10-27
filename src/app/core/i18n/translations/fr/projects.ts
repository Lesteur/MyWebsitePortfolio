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

  'projects.one.title': "Moteur de jeu personnalisé",
  'projects.one.summary': 'Création de mon propre moteur de jeu avec le framework\
  MonoGame pour comprendre marchent les systèmes de programmes qui marchent en temps réel.',
  'projects.one.description':
    "Je crée un moteur de jeu en recréant moi-même les systèmes qui en font partie :\
    le système de rendu du graphisme, la gestion de la musique et du son, la gestion\
    des processus et des ressources à charger. C'est un excellent apprentissage pour\
    créer une vraie application sur C#. Je travaille dessus sur Visual Studio et j'apprends\
    à organiser les différentes classes et services de l'application.",
  'projects.one.role': 'Projet personnel',

  'projects.two.title': 'Jeu de FPS en Réalité Virtuelle sur Unity',
  'projects.two.summary': "Création d'un jeu en Réalité Virtuelle sur Unity en\
  utilisant le framework XR Interaction Toolkit (XRI).",
  'projects.two.description':
    "J'ai créé un jeu en VR de FPS pour m'initier à la réalité virtuelle. J'ai\
    utilisé le matériel Oculus Quest 2 pendant le débogage du projet afin de créer\
    un jeu de tir à la première personne. Cela m'a permis de savoir comment gérer la\
    réalité virtuelle et de faire des calculs pour ajuster les tirs de projectiles.",
  'projects.two.role': 'Projet académique',

  'projects.three.title': 'Prototype de jeu vidéo',
  'projects.three.summary': "Création d'un prototype de jeu vidéo sur GameMaker.",
  'projects.three.description':
    "J'ai commencé ce projet au début du lycée pour commencer à créer mon propre\
    jeu vidéo. Cela m'a aidé à m'améliorer en gestion de code et de ressources, à\
    savoir comment marchent les fonctions les uns avec les autres et même à pouvoir\
    expérimenter les shaders.",
  'projects.three.role': 'Projet personnel',
};