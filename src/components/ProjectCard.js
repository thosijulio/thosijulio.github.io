import { useEffect, useState } from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
  const { project: { description, images, link, name, path, repo, tags, type } } = props;
  const [urlImage, setUrlImage] = useState('');

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
  }, [images, path]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setUrlImage(
      require(
        `../assets/images/projects/${path}/${Math.floor(Math.random() * images) + 1}.png`
    ));
  });

  return (
    <section className="project-card-section">
      <div className="project-card-header">
        <h3>{name}</h3>
      </div>
      <div className="project-card-content">
        <div className="project-card-image-tags">
          <div className="project-card-image">
            <img alt="project-img" src={urlImage} />
          </div>
          <div className="project-tags">
            {tags.map((tag, index) => <span key={index}>{tag}</span>)}
          </div>
        </div>
        <div className="project-card-more-details">
          <p>{description}</p>
          <div className="project-card-links">
            {type === 'Front-End' && <a href={link} target="_blank" rel="noreferrer">Acessar</a>}
            <a href={repo} target="_blank" rel="noreferrer">Repositório</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectCard;
