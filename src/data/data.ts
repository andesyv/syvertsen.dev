import { nanoid } from 'nanoid';

export interface IProjectData {
  id: string;
  img?: string;
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
      'This project was our bachelor project that I made together with one other programmer and 2 artists over half a year.',
    ],
    link: { text: 'Check out', url: 'https://spacedance.itch.io/big-butler-battle' },
    repo: 'https://github.com/Skau/BigButlerBattle', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/ChristmasWebGL.gif',
    title: 'Christmas WebGL',
    info: ['A small christmassy themed rendering made with WebGL 2.0'],
    link: { url: 'https://andesyv.github.io/ChristmasWebGL/' },
    repo: 'https://github.com/andesyv/ChristmasWebGL', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'Game Engine (ECSMTGE)',
    info: [
      'A small game engine making use of the data oriented design pattern Entity Component System, which also features a JavaScript live-scripting engine.',
      'Made by me and another programmer as a semester project.',
    ],
    repo: 'https://github.com/andesyv/ECSMTGE',
  },
  {
    id: nanoid(),
    title: 'ThonkBot',
    info: ['A small Discord bot I made for fun with a few friends.'],
    link: {
      text: 'Add bot to server?',
      url:
        'https://discord.com/oauth2/authorize?&client_id=492017860068114444&scope=bot&permissions=201427968',
    },
    repo: 'https://github.com/andesyv/ThonkBot',
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
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anders-syvertsen/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/andesyv',
    },
  ],
};

export interface IData {
  projects: IProjectData[];
  footer: {
    networks: IFooterData[];
  };
}
