import { useEffect, useState } from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
  const { project: { description, images, link, name, path, repo, tags, type } } = props;
  const [urlImage, setUrlImage] = useState(require('../assets/images/projects/pokedex/1.png'));

  useEffect(() => {
    const getRandomImage = setInterval(() => {
      setUrlImage(
        require(
          `../assets/images/projects/${path}/${Math.floor(Math.random() * images) + 1}.png`
      ));
    }, 3000)
    return () => {
      clearInterval(getRandomImage);
    }
  }, [path, images]);
  return (
    <section className="project-card-section">
      <div className="project-card-name">
        <h3>{name}</h3>
      </div>
      <div className="project-card-image-tags">
        <img alt="project-img" src={urlImage} />
        <div className="project-tags">
          {tags.map((tag) => <span>{tag}</span>)}
        </div>
      </div>
      <p>{description}</p>
      <div className="project-card-links">
        {type === 'Front-End' && <a href={link} target="_blank" rel="noreferrer">Acessar</a>}
        <a href={repo} target="_blank" rel="noreferrer">Repositório</a>
      </div>
    </section>
  )
}

export default ProjectCard;
