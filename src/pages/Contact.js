import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-main-text">
        <span>
          {" "}
          Como posso ajudar?
        </span>
      </div>
      <div className="contact-role">
        <div className="role-text">
          Você tem alguma dúvida ou deseja entrar em contato?
          Pode me encontrar em minhas redes sociais que eu respondo o mais breve possível.
        </div>
        <div className="role-social-links">
          <a href="mailto:thosijulio@gmail.com" target="_blank" rel="noreferrer">
            <i class="fa-solid fa-envelope" />
          </a>
          <a href="http://www.github.com/thosijulio" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github" />
          </a>
          <a href="https://www.instagram.com/thosijulio" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-instagram" />
          </a>
          <a href="https://linkedin.com.br/in/thosijulio" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-linkedin" />
          </a>
          <a href="https://wa.me/5514991895484" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-whatsapp" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact;
