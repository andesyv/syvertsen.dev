import React from 'react';
import type { Metadata } from 'next';
import { Project, projects } from './project-data';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My Projects',
};

const getMainProjectUrl = (project: Project): string =>
  project.demo?.url ?? project.sourceUrl;

// TODO: Fix images
// TODO: Some of the project descriptions should have an optional url displayed in a custom link (i.e. ThonkBot)

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
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
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
