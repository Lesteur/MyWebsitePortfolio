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

  'projects.one.title': 'Custom game engine',
  'projects.one.summary': 'Creating my own game engine using the MonoGame framework to\
  understand how real-time software systems work.',
  'projects.one.description':
    "I am building a game engine by recreating its core systems myself:\
    the graphics rendering system, music and sound management, and the\
    handling of processes and resources to be loaded. It is an excellent\
    learning experience for developing a real-world application in C#.\
    I am working on it using Visual Studio, where I am learning how to\
    organize the application's various classes and services.",
  'projects.one.role': 'Personal project',

  'projects.two.title': 'Virtual Reality FPS Game in Unity',
  'projects.two.summary': 'Creation of a virtual reality game in Unity using\
  the XR Interaction Toolkit (XRI) framework.',
  'projects.two.description':
    "I created a VR FPS game to familiarize myself with virtual reality.\
    I used an Oculus Quest 2 headset while debugging the project to\
    develop a first-person shooter. This allowed me to learn how to\
    handle virtual reality environments and perform the calculations\
    necessary to adjust projectile trajectories.",
  'projects.two.role': 'Academic project',

  'projects.three.title': 'Video game prototype',
  'projects.three.summary': 'Creation of a video game prototype using GameMaker.',
  'projects.three.description':
    "I began this project at the start of high school with the goal of\
    creating my own video game. It helped me improve my code and resource\
    management skills, understand how functions interact with one another,\
    and even experiment with shaders.",
  'projects.three.role': 'Personal project',
} as const satisfies Record<string, string>;