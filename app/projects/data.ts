import { imageSize } from "image-size";
// import { imageSizeFromFile } from "image-size/fromFile" // Doesn't play ball too nicely with module resolution
import { isWebUri } from "valid-url";
import { ImageData as ExtendedImageData } from "../components/projectimg";
import process from "node:process";
import { isBun, isNode } from "runtimey";

export interface SimpleImageData {
  uri: string;
  alt: string;
}

export interface Project<I> {
  title: string;
  descriptions: string[];
  image?: I;
  demo?: {
    // Will use this one later...:
    display: string;
    url: string;
  };
  sourceUrl: string;
}

export type ExtendedProjectData = Project<ExtendedImageData>;

export const projects: Project<SimpleImageData>[] = [
  {
    title: "Big Butler Battle",
    descriptions: [
      "A local splitscreen multiplayer game about skating around a castle as a butler.",
      "This project was our bachelor project that I made together with one other programmer and 2 artists over half a year.",
    ],
    image: {
      uri: "BigButlerBattle.png",
      alt:
        "Game art for the Big Butler Battle game showing a fancy butler carrying a tray of fruit and drinks",
    },
    demo: {
      display: "Check out",
      url: "https://spacedance.itch.io/big-butler-battle",
    },
    sourceUrl: "https://github.com/Skau/BigButlerBattle",
  },
  {
    title: "Megatron3000",
    descriptions: [
      "A volume renderer for visualization of medical CT scan data.",
    ],
    image: {
      uri:
        "https://raw.githubusercontent.com/andesyv/megatron3000/master/demo.png",
      alt:
        "Screenshot of the volume renderer showing some skeletal bone structure of some CT scan data",
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
      alt:
        "A small clip showing some raytraced reflective spheres, planes and a skybox",
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
      alt: "A small clip showing a simple 3D rendered christmas tree",
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
      alt: "A cube surrounding by generated noise textures on each side",
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
      alt: "Some blobby letters attempting to spell out my name",
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
  const response = isBun ? await Bun.fetch(url) : await fetch(url);
  if (!response.ok || response.body === null) {
    throw new Error(`Failed to fetch ${url}`);
  }

  const bytes = await response.bytes();
  if (!(bytes instanceof Uint8Array)) {
    throw new TypeError("Not a Uint8Array. We were lied to!");
  }
  const { width, height } = imageSize(bytes);
  return {
    width: width ?? 0,
    height: height ?? 0,
  };
};

const readBytes = async (path: string): Promise<Uint8Array<ArrayBuffer>> => {
  if (isBun) {
    return await Bun.file(path).bytes();
  } else if (isNode) {
    const { readFile } = await import("fs/promises");
    return await readFile(path);
  } else {
    throw new Error("Unhandled runtime");
  }
}

const getDims = async (path: string): Promise<ImageDims> => {
  const webUrl = isWebUri(path);
  if (webUrl !== undefined) {
    return await getRemoteImageSize(webUrl);
  }
 
  const filePath = `${process.cwd()}/public/projects/${path}`;
  const { width, height } = imageSize(await readBytes(filePath));
  return {
    width: width ?? 0,
    height: height ?? 0,
  };
};

const populateImageData = async (
  image?: SimpleImageData,
): Promise<ExtendedImageData | undefined> => {
  if (image === undefined) {
    return;
  }

  const { width, height } = await getDims(image.uri);

  return {
    uri: image.uri,
    alt: image.alt,
    width: width,
    height: height,
  };
};

export async function populateProjectData(
  data: Project<SimpleImageData>[],
): Promise<ExtendedProjectData[]> {
  return await Promise.all(
    data.map(async (simpleProject): Promise<ExtendedProjectData> => {
      return {
        title: simpleProject.title,
        descriptions: simpleProject.descriptions,
        image: await populateImageData(simpleProject.image),
        demo: simpleProject.demo,
        sourceUrl: simpleProject.sourceUrl,
      };
    }),
  );
}

