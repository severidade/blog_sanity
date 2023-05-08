import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../utils/fetch';

export default function Projects() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
      fetchProjects()
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return(
    <main className='container_main'>
      <section>
        <h2>Projetos</h2>
        <section>
          {projectData && projectData.map((project,index) =>(
            <article>
              <a
                href={project.link}
                alt={project.title}
                target='_blank'
                rel="noopener noreffer noreferrer">
                  <h3>{project.title}</h3>
              </a>
              <div>
                {/* <span>
                  <strong>Finalizado em </strong>:{" "}
                  {new Date(project.date).toLocaleDateString()}
                </span>
                <span>
                  <strong>Localização</strong>:{" "}
                  { project.place }
                </span> */}
                <figure className='container_main_image'>
                  <img
                    src={ project.mainImage.asset.url }
                    alt={ project.title}
                  />
                </figure>
                <span>
                  <strong>Titpo</strong>:{" "}
                  { project.projectType }
                </span>
                <p>
                  { project.description }
                </p>
                <a
                  href={project.link}
                  alt={project.title}
                  target='_blank'
                  rel="noopener noreffer noreferrer">
                    Veja o projeto
                </a>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}