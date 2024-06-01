import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-main-text">
        <span className="main-text">
          {" "}
          Sobre Mim
        </span>
        <div className="about-role">
          <span className="primary-text">
            {" "}
            <p>
              Tenho 26 anos, me formei em 2022 em Desenvolvimento Full-Stack Web na Trybe.
              Estou trabalhando à dois anos como desenvedor full stack.
            </p>
            <p>
              Meu objetivo no momento é adquirir mais conhecimento em tecnologias diversas, e trazer soluções cada vez mais robustas e rápidas para meus clientes.
            </p>
          </span>
          <div className="about-picture">
            <div className="about-picture-background" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
