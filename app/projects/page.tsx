'use server'

import React from 'react';
import { Metadata } from 'next';
import { ExtendedProjectData, projects as originalProjects, populateProjectData } from './data';
import /*ProjectImg,*/ { assertIsImageData } from '../components/projectimg';

//export const metadata: Metadata = {
//  title: 'Projects',
//  description: 'My Projects',
//};

interface Props {
  projects: ExtendedProjectData[];
}

const getMainProjectUrl = (project: ExtendedProjectData): string =>
  project.demo?.url ?? project.sourceUrl;

function MaybeProjectImage(props: ExtendedProjectData) {
//  if (props.image) {
//    return (<ProjectImg {...props.image} />);
//  }
  return null;
}

//const isGif = (url: string) => url.slice(url.length - 4) === '.gif'
//
//const ProjectImage: React.FC<{ url: string, alt: string }> = ({ url, alt }) => {
//  const imageUrl = isWebUri(url) !== undefined ? url : `/projects/${url}`;
//  return (<Image
//    src={imageUrl}
//    alt={alt}
//    width={160}
//    height={160}
//    unoptimized={isGif(imageUrl)}
//  />);
//};

// TODO: Fix images
// TODO: Some of the project descriptions should have an optional url displayed in a custom link (i.e. ThonkBot)

export default async function Page() {
  const extendedProjects = await populateProjectData(originalProjects);
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-6">
        {extendedProjects.map((project, index) => {
          if (project.image !== undefined) {
            assertIsImageData(project.image);
          }
          return (
            <a
              key={index}
              href={getMainProjectUrl(project)}
              target="_blank"
              rel="noopener noreferrer"
              className="block group hover:opacity-80 transition-opacity duration-200"
            >
              <div className="flex flex-col">
                <div className="w-full flex justify-between items-baseline">
                  <span className="text-black dark:text-white font-medium tracking-tight">
                    {project.title}
                  </span>
                  {/*<span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">*/}
                  {/*  {project.year}*/}
                  {/*</span>*/}
                </div>
                {project.descriptions.map((description, index) => (
                  <p
                    key={index}
                    className="prose prose-neutral dark:prose-invert pt-3"
                  >
                    {description}
                  </p>
                ))}
                <MaybeProjectImage {...project} />
              </div>
            </a>
          );})}
      </div>
    </section>
  );
};

