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
      <h1>{name}</h1>
      <img alt="project-img" src={urlImage} />
      { tags.map((tag) => <span>{tag}</span>)}
      <p>{description}</p>
      {type === 'Front-End' && <a href={link} target="_blank" rel="noreferrer">Site</a>}
      <a href={repo} target="_blank" rel="noreferrer">Repositório</a>
    </section>
  )
}

export default ProjectCard;
