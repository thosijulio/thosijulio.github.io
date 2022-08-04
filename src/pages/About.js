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
              Quem sou eu? Sou Julio, pai de uma linda menina e marido de uma mulher
              maravilhosa. Tenho 26 anos, me formei em 2022 em Desenvolvimento Full-Stack Web na Trybe.
              No momento, estou fazendo uma transição de carreira, trabalhei por anos na área de suporte TI.
            </p>
            <p>
              Sou curioso e obcecado por perfeição, sou tolerante e acredito que todos temos os mesmos direitos de viver
              independente de como parecemos, de onde viemos e quem amamos. Acredito no trabalho em equipe, e que ele nos leva a melhores resultados.
            </p>
            <p>
              Meu objetivo no momento é iniciar minha carreira como desenvolvedor, e adquirir ainda mais conhecimento em tecnologias diversas.
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
