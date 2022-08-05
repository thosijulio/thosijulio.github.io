import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import './Projects.css';

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-main-text">
        <span className="main-text">
          Projetos
        </span>
        <div className="projects-role">
          { projects.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
      </div>
    </section>
  )
}

export default Projects;
