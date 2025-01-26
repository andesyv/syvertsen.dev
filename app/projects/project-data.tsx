export interface Project {
  title: string;
//  year: number;
  descriptions: string[];
//  image?: string;
  demo?: {
    // Will use this one later...:
    display: string,
    url: string,
  },
  sourceUrl: string,
}

export const projects: Project[] = [
  {
    title: "Big Butler Battle",
    descriptions: [
      "A local splitscreen multiplayer game about skating around a castle as a butler.",
      "This project was our bachelor project that I made together with one other programmer and 2 artists over half a year."
    ],
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
