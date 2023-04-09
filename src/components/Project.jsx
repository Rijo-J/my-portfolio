import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tag
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="">
      <section className="">
        <h1 className="">MyProjects</h1>
        <h2 className="">
          Welcome to my projects page!
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="" key={project.title}>
                <h3 className="">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="">
                  <span>
                    <strong className="font-bold">Finished on</strong>{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>{" "}
                    {project.projectType}
                  </span>
                  <p className="">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className=""
                  >
                    View the Project{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
