import { nanoid } from 'nanoid';

export interface IProjectData {
  id: string;
  img: string;
  title: string;
  info: string[];
  link?: {
    text?: string;
    url: string;
  };
  repo: string;
}

// PROJECTS DATA
export const projectsData: IProjectData[] = [
  {
    id: nanoid(),
    img: 'projects/BigButlerBattle.png',
    title: 'Big Butler Battle',
    info: [
      'A local splitscreen multiplayer game about skating around a castle as a butler.',
      'This project was our bachelor project that I made together with one other programmer and 2 artists over half a year.'
    ],
    link: { text: 'Check out', url: 'https://spacedance.itch.io/big-butler-battle' },
    repo: 'https://github.com/Skau/BigButlerBattle', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/ChristmasWebGL.png',
    title: 'Christmas WebGL',
    info: ['A small christmassy themed rendering made with WebGL 2.0'],
    link: { url: 'https://andesyv.github.io/ChristmasWebGL/' },
    repo: 'https://github.com/andesyv/ChristmasWebGL', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: [],
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

export interface IFooterData {
  id: string;
  name: string;
  url: string;
}

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

export interface IData {
  projects: IProjectData[];
  footer: {
    networks: IFooterData[];
  };
}

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
