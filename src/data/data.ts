import { nanoid } from 'nanoid';
import sizeOf from 'image-size';
import { isHttpsUri, isWebUri } from 'valid-url';
import http from 'http';
import https from 'https';

export interface IProjectData<I = string> {
  id: string;
  img?: I;
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
    img: 'BigButlerBattle.png',
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
    title: 'Game Engine (ECSMTGE)',
    info: [
      'A small game engine making use of the data oriented design pattern Entity Component System, which also features a JavaScript live-scripting engine.',
      'Made by me and another programmer as a semester project.',
    ],
    repo: 'https://github.com/andesyv/ECSMTGE',
  },
  {
    id: nanoid(),
    img: 'ChristmasWebGL.gif',
    title: 'Christmas WebGL',
    info: ['A small christmassy themed rendering made with WebGL 2.0'],
    link: { url: 'https://andesyv.github.io/ChristmasWebGL/' },
    repo: 'https://github.com/andesyv/ChristmasWebGL', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'ThonkBot',
    info: ['A small Discord bot I made for fun with a few friends.'],
    link: {
      text: 'Add bot to server?',
      url: 'https://discord.com/oauth2/authorize?&client_id=492017860068114444&scope=bot&permissions=201427968',
    },
    repo: 'https://github.com/andesyv/ThonkBot',
  },
  {
    id: nanoid(),
    img: 'RaytracingWebGL.gif',
    title: 'Raytracting WebGL',
    info: ['Some very basic raytracing in WebGL'],
    link: { url: 'https://andesyv.github.io/RaytracingWebGL/' },
    repo: 'https://github.com/andesyv/RaytracingWebGL',
  },
  {
    id: nanoid(),
    title: 'Noise Cubemap Generator',
    info: ['A small webtool for generating noisy cubemaps'],
    link: { url: 'https://andesyv.github.io/noise-cubemap-generator/' },
    repo: 'https://github.com/andesyv/noise-cubemap-generator',
  },
  {
    id: nanoid(),
    img: 'https://raw.githubusercontent.com/andesyv/megatron3000/master/demo.png',
    title: 'Megatron3000',
    info: ['A volume renderer for visualization of medical CT scan data.'],
    repo: 'https://github.com/andesyv/megatron3000',
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
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:anders@💻.kz',
    },
  ],
};

export interface IData<I = string> {
  projects: IProjectData<I>[];
  footer: {
    networks: IFooterData[];
  };
}
export interface ExtendedImageData {
  filename: string;
  width: number;
  height: number;
}

export type IProjectDataExtended = IProjectData<ExtendedImageData>;
export type IDataExtended = IData<ExtendedImageData>;

const getRemoteImageSize = async (uri: string): Promise<any> => {
  let result = new Promise((resolve, reject) => {
    const protocol = isHttpsUri(uri) ? https : http;
    protocol.get(uri, (resp) => {
      const chunks: Buffer[] = [];
      resp
        .on('data', (chunk) => {
          chunks.push(chunk);
        })
        .on('end', () => {
          const buffer = Buffer.concat(chunks);
          resolve(sizeOf(buffer));
        })
        .on('error', (err) => reject(err));
    });
  });

  return result;
};

const getDims = async (path: string): Promise<ExtendedImageData | undefined> => {
  const uri = isWebUri(path);
  const dims =
    uri !== undefined
      ? await getRemoteImageSize(uri)
      : sizeOf(`${process.cwd()}/public/projects/${path}`);
  return dims?.width === undefined || dims?.height === undefined
    ? undefined
    : {
        filename: path,
        width: dims.width,
        height: dims.height,
      };
};

export const populateImageData = async (data: IProjectData[]): Promise<IProjectDataExtended[]> => {
  return await Promise.all(
    data.map(async (d): Promise<IProjectDataExtended> => {
      const de = d as unknown as IProjectDataExtended;
      if (d.img !== undefined) {
        de.img = await getDims(d.img);
      }
      return de;
    })
  );
};
