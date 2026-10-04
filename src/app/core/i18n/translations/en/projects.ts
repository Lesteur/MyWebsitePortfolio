// Naming rule: every project needs 'projects.<id>.title | summary | description | role'.
// The ids are derived from the '.title' keys (see core/projects/projects.data.ts).
export const projects = {
  'projects.title': 'Projects',
  'projects.intro': 'A selection of things I have built.',
  'projects.view': 'View project',

  'projectDetail.back': 'Back to projects',
  'projectDetail.role': 'Role',
  'projectDetail.year': 'Year',
  'projectDetail.technologies': 'Technologies',
  'projectDetail.repo': 'Source code',
  'projectDetail.demo': 'Live demo',
  'projectDetail.notFound': 'This project does not exist.',

  'projects.one.title': 'Project One',
  'projects.one.summary': 'A short description of what this project does and why it matters.',
  'projects.one.description':
    'A longer description of the project: the problem it solves, the key technical decisions and what you learned.',
  'projects.one.role': 'Lead developer',

  'projects.two.title': 'Project Two',
  'projects.two.summary': 'A short description of what this project does and why it matters.',
  'projects.two.description':
    'A longer description of the project: the problem it solves, the key technical decisions and what you learned.',
  'projects.two.role': 'Solo developer',

  'projects.three.title': 'Project Three',
  'projects.three.summary': 'A short description of what this project does and why it matters.',
  'projects.three.description':
    'A longer description of the project: the problem it solves, the key technical decisions and what you learned.',
  'projects.three.role': 'Back-end developer',
} as const satisfies Record<string, string>;