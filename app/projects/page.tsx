"use server";

import {
  ExtendedProjectData,
  populateProjectData,
  projects as originalProjects,
} from "./data.ts";
import ProjectImg from "../components/projectimg";

const getMainProjectUrl = (project: ExtendedProjectData): string =>
  project.demo?.url ?? project.sourceUrl;

export default async function Page() {
  const extendedProjects = await populateProjectData(originalProjects);
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-6">
        {extendedProjects.map((project, index) => {
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
                </div>
                {project.descriptions.map((description, index) => (
                  <p
                    key={index}
                    className="prose prose-neutral dark:prose-invert pt-3"
                  >
                    {description}
                  </p>
                ))}
                {project.image && <ProjectImg {...project.image} />}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
