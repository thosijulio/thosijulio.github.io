import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-main-text">
        <span> Como posso ajudar?</span>
      </div>
      <div className="contact-role">
        <div className="role-text">
          Você tem alguma dúvida ou deseja entrar em contato? Pode me encontrar
          em minhas redes sociais que eu respondo o mais breve possível.
        </div>
        <div className="role-social-links">
          <a
            href="mailto:thosijulio@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoGmail />
          </a>
          <a
            href="http://www.github.com/thosijulio"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/thosijulio"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com.br/in/thosijulio"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/5514991624794"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
