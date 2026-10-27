import type { TranslationKey } from '../i18n/translations/en';

/** Extracts "<id>" from every 'projects.<id>.title' key of the English dictionary */
type IdFromTitleKey<K> = K extends `projects.${infer Id}.title` ? Id : never;
export type ProjectId = IdFromTitleKey<TranslationKey>;

type ProjectField = 'title' | 'summary' | 'description' | 'role';

interface ProjectDefinition {
  readonly id: ProjectId;
  readonly year: number;
  /** Technology names are language-neutral, so they are not translated */
  readonly tags: readonly string[];
  readonly repoUrl?: string;
  readonly demoUrl?: string;
}

export interface Project extends ProjectDefinition {
  readonly titleKey: TranslationKey;
  readonly summaryKey: TranslationKey;
  readonly descriptionKey: TranslationKey;
  readonly roleKey: TranslationKey;
}

// Placeholder data: replace with your real projects
const DEFINITIONS: readonly ProjectDefinition[] = [
  {
    id: 'one',
    year: 2026,
    tags: ['Software', "Video Game", "Programming", 'Framework', 'Visual Studio', 'C#', 'MonoGame'],
    repoUrl: 'https://github.com/Lesteur/FreedomEngine',
  },
  {
    id: 'two',
    year: 2025,
    tags: ['Virtual Reality', 'Oculus Quest 2', "Video Game", "Programming", 'Framework', 'Visual Studio', 'C#', 'Unity'],
    repoUrl: 'https://gitlab.isima.fr/adibnouzah/unity-fps-project',
  },
  {
    id: 'three',
    year: 2023,
    tags: ['Software', 'Video Game', 'Programming', 'GameMaker'],
    repoUrl: 'https://github.com/Lesteur/MyRPG',
    demoUrl: 'https://gx.games/games/0aro9s/1er-premier-prototype-rpg-gamemaker/tracks/d2ff313c-0cb6-4133-883e-b237aaf229ea/',
  },
];

/** Builds a type-checked translation key such as 'projects.one.title' */
function projectKey<F extends ProjectField>(id: ProjectId, field: F) {
  return `projects.${id}.${field}` as const;
}

export const PROJECTS: readonly Project[] = DEFINITIONS.map((definition) => ({
  ...definition,
  titleKey: projectKey(definition.id, 'title'),
  summaryKey: projectKey(definition.id, 'summary'),
  descriptionKey: projectKey(definition.id, 'description'),
  roleKey: projectKey(definition.id, 'role'),
}));

export function findProject(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}