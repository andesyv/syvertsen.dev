import { nanoid } from 'nanoid';
import sizeOf from 'image-size';
import { isWebUri } from 'valid-url';
import { buffer as getBuffer } from 'get-stream';
import { get } from 'request';

interface IBaseProjectData<I = string> {
  img?: I;
  title: string;
  info: string[];
  link?: {
    text?: string;
    url: string;
  };
  repo: string;
}

export interface IBaseNetworkData {
  name: string;
  url: string;
}

// PROJECTS DATA
const projects: IBaseProjectData[] = [
  {
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
    img: 'https://raw.githubusercontent.com/andesyv/megatron3000/master/demo.png',
    title: 'Megatron3000',
    info: ['A volume renderer for visualization of medical CT scan data.'],
    repo: 'https://github.com/andesyv/megatron3000',
  },
  {
    title: 'Game Engine (ECSMTGE)',
    info: [
      'A small game engine making use of the data oriented design pattern Entity Component System, which also features a JavaScript live-scripting engine.',
      'Made by me and another programmer as a semester project.',
    ],
    repo: 'https://github.com/andesyv/ECSMTGE',
  },
  {
    img: 'RaytracingWebGL.gif',
    title: 'Raytracting WebGL',
    info: ['Some very basic raytracing in WebGL'],
    link: { url: 'https://andesyv.github.io/RaytracingWebGL/' },
    repo: 'https://github.com/andesyv/RaytracingWebGL',
  },
  {
    title: 'ThonkBot',
    info: ['A small Discord bot I made for fun with a few friends.'],
    link: {
      text: 'Add bot to server?',
      url: 'https://discord.com/oauth2/authorize?&client_id=492017860068114444&scope=bot&permissions=201427968',
    },
    repo: 'https://github.com/andesyv/ThonkBot',
  },
  {
    img: 'ChristmasWebGL.gif',
    title: 'Christmas WebGL',
    info: ['A small christmassy themed rendering made with WebGL 2.0'],
    link: { url: 'https://andesyv.github.io/ChristmasWebGL/' },
    repo: 'https://github.com/andesyv/ChristmasWebGL', // if no repo, the button will not show up
  },
  {
    img: 'Noise.png',
    title: 'Noise Cubemap Generator',
    info: ['A small webtool for generating noisy cubemaps'],
    link: { url: 'https://noise.syvertsen.dev/' },
    repo: 'https://github.com/andesyv/noise-cubemap-generator',
  },
  {
    img: 'Text.png',
    title: 'SDF Text visualization',
    info: ['Web experiment that visualizes text using a surface distance function render'],
    link: { url: 'https://text.syvertsen.dev/' },
    repo: 'https://github.com/andesyv/sdf-text',
  },
  {
    title: 'Tangible Scalar Fields',
    info: [
      'My master thesis project where I made physical visualizations of scalar data using 3D-printing and a haptic force device.',
    ],
    link: {
      text: 'Read thesis',
      url: 'https://hdl.handle.net/11250/3004277',
    },
    repo: 'https://github.com/andesyv/tangible-scalar-fields',
  },
];

// FOOTER DATA
const networks: IBaseNetworkData[] = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/anders-syvertsen/',
  },
  {
    name: 'github',
    url: 'https://github.com/andesyv',
  },
  {
    name: 'envelope',
    url: 'mailto:anders@💻.kz',
  },
];

type IDataWithId<T> = {
  id: string;
} & T;

const AttachIds = <Type>(arr: Type[]): IDataWithId<Type>[] =>
  arr.map((oldObj) => ({ id: nanoid(), ...oldObj }));

export type IProjectData<I = string> = IDataWithId<IBaseProjectData<I>>;
export type INetworkData = IDataWithId<IBaseNetworkData>;

export const projectsData = AttachIds(projects);
export const footerData = AttachIds(networks);

export interface IData<I = string> {
  projects: IProjectData<I>[];
  footer: {
    networks: INetworkData[];
  };
}

export interface ExtendedImageData {
  filename: string;
  width: number;
  height: number;
}

export type IProjectDataExtended = IProjectData<ExtendedImageData>;
export type IDataExtended = IData<ExtendedImageData>;

const getRemoteImageSize = async (uri: string) => sizeOf(await getBuffer(get(uri)));

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
