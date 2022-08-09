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
          <i class="fa-solid fa-envelope" />
          <i class="fa-brands fa-github" />
          <i class="fa-brands fa-instagram" />
          <i class="fa-brands fa-linkedin" />
          <i class="fa-brands fa-whatsapp" />
        </div>
      </div>
    </section>
  )
}

export default Contact;
