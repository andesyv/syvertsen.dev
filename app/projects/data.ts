import sizeOf from 'image-size';
import { isWebUri } from 'valid-url';
import { assertIsImageData, ImageData as ExtendedImageData } from '../components/projectimg';

export interface ImageData {
  uri: string;
  alt: string;
}

export interface Project<I> {
  title: string;
//  year: number;
  descriptions: string[];
  image?: I,
  demo?: {
    // Will use this one later...:
    display: string,
    url: string,
  },
  sourceUrl: string,
}

export type ExtendedProjectData = Project<ExtendedImageData>;

export const projects: Project<ImageData>[] = [
  {
    title: "Big Butler Battle",
    descriptions: [
      "A local splitscreen multiplayer game about skating around a castle as a butler.",
      "This project was our bachelor project that I made together with one other programmer and 2 artists over half a year."
    ],
    image: {
      uri: "BigButlerBattle.png",
      alt: "Game art for the Big Butler Battle game showing a fancy butler carrying a tray of fruit and drinks"
    },
    demo: {
      display: "Check out",
      url: "https://spacedance.itch.io/big-butler-battle",
    },
    sourceUrl:  "https://github.com/Skau/BigButlerBattle",
  },
  {
    title: "Megatron3000",
    descriptions: [
      "A volume renderer for visualization of medical CT scan data.",
    ],
    image: {
      uri: "https://raw.githubusercontent.com/andesyv/megatron3000/master/demo.png",
      alt: "Screenshot of the volume renderer showing some skeletal bone structure of some CT scan data"
    },
    sourceUrl: "https://github.com/andesyv/megatron3000",
  },
  {
    title: "Game Engine (ECSMTGE)",
    descriptions: [
      "A small game engine making use of the data oriented design pattern Entity Component System, which also features a JavaScript live-scripting engine.",
      "Made by me and another programmer as a semester project.",
    ],
    sourceUrl: "https://github.com/andesyv/ECSMTGE",
  },
  {
    title: "Raytracting WebGL",
    descriptions: [
      "Some very basic raytracing in WebGL",
    ],
    image: {
      uri: "RaytracingWebGL.gif",
      alt: "A small clip showing some raytraced reflective spheres, planes and a skybox"
    },
    demo: {
      display: "See live",
      url: "https://andesyv.github.io/RaytracingWebGL",
    },
    sourceUrl: "https://github.com/andesyv/RaytracingWebGL",
  },
  {
    title: "ThonkBot",
    descriptions: [
      "A small Discord bot I made for fun with a few friends.",
    ],
//    demo: {
//      display: "Add bot to server?",
//      url: "https://discord.com/oauth2/authorize?&client_id=492017860068114444&scope=bot&permissions=201427968",
//    },
    sourceUrl: "https://github.com/andesyv/ThonkBot",
  },
  {
    title: "Christmas WebGL",
    descriptions: [
      "A small christmassy themed rendering made with WebGL 2.0",
    ],
    image: {
      uri: "ChristmasWebGL.gif",
      alt: "A small clip showing a simple 3D rendered christmas tree"
    },
    demo: {
      display: "See live",
      url: "https://andesyv.github.io/ChristmasWebGL",
    },
    sourceUrl: "https://github.com/andesyv/ChristmasWebGL",
  },
  {
    title: "Noise Cubemap Generator",
    descriptions: [
      "A small webtool for generating noisy cubemaps",
    ],
    image: {
      uri: "Noise.png",
      alt: "A cube surrounding by generated noise textures on each side"
    },
    demo: {
      display: "See live",
      url: "https://noise.syvertsen.dev",
    },
    sourceUrl: "https://github.com/andesyv/noise-cubemap-generator",
  },
  {
    title: "SDF Text visualization",
    descriptions: [
      "Web experiment that visualizes text using a surface distance function render",
    ],
    image: {
      uri: "Text.png",
      alt: "Some blobby letters attempting to spell out my name"
    },
    demo: {
      display: "See live",
      url: "https://text.syvertsen.dev",
    },
    sourceUrl: "https://github.com/andesyv/sdf-text",
  },
  {
    title: "Tangible Scalar Fields",
    descriptions: [
      "My master thesis project where I made physical visualizations of scalar data using 3D-printing and a haptic force device.",
    ],
    demo: {
      display: "Read thesis",
      url: "https://hdl.handle.net/11250/3004277",
    },
    sourceUrl: "https://github.com/andesyv/tangible-scalar-fields",
  },
];

interface ImageDims {
  width: number;
  height: number;
}

const getRemoteImageSize = async (url: string): Promise<ImageDims> => {
// TODO
//  sizeOf(await getBuffer(get(url)));
  return { width: 100, height: 100 };
};


const getDims = async (path: string): Promise<ImageDims> => {
  const webUrl = isWebUri(path);
  if (webUrl !== undefined) {
    return await getRemoteImageSize(webUrl);
  }

  const { width, height } = sizeOf(`${process.cwd()}/public/projects/${path}`);
  return {
    width: width ?? 0,
    height: height ?? 0,
  };
};

const populateImageData = async (image?: ImageData): Promise<ExtendedImageData | undefined> => {
  console.log(`Populating image: ${image?.uri ?? 'No image :('}`);
  if (image === undefined) {
    return;
  }

  const { width, height } = await getDims(image.uri);
  console.log(`Image: "${image.uri}" has dimensions: ${width} x ${height}`);

  return {
    uri: image.uri,
    alt: image.alt,
    width: width,
    height: height,
  }
};

export async function populateProjectData (data: Project<ImageData>[]): Promise<ExtendedProjectData[]> {
  console.log('Populating project data...');
  return await Promise.all(
    data.map(async (simpleProject): Promise<ExtendedProjectData> => {
      const image = await populateImageData(simpleProject.image);
      return  {
        image: image,
        ...simpleProject,
      };
    })
  );
}

