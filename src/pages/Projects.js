import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import './Projects.css';

function Projects() {
  const [choisedProject, setChoisedProject] = useState(projects[0]);
  return (
    <section className="projects-section">
      <div className="projects-main-text">
        <span className="main-text">
          Projetos
        </span>
        <div className="projects-choise-btn">
          <div className="projects-front-end">
            <h4>Front-End</h4>
            { projects.map((project, index) => {
              if (project.type === 'Front-End') {
                return (<button key={index} onClick={() => setChoisedProject(project)}>{project.name}</button>);
              } return null;
            })}
          </div>
          <div className="projects-back-end">
            <h4>Back-End</h4>
            { projects.map((project, index) => {
              if (project.type === 'Back-End') {
                return (<button key={index} onClick={() => setChoisedProject(project)}>{project.name}</button>);
              } return null;
            })}
          </div>
        </div>
        <div className="projects-role">
          <ProjectCard project={choisedProject} />
        </div>
      </div>
    </section>
  )
}

export default Projects;
