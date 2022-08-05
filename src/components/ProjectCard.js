import './ProjectCard.css';

function ProjectCard(props) {
  const { project: { description, images, link, name, path, repo, tags, type } } = props;

  return (
    <section className="project-card-section">
      <h1>{name}</h1>
    </section>
  )
}

export default ProjectCard;
