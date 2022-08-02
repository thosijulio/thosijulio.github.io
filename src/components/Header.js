import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/contact">Contato</Link>
    </header>
  );
}

export default Header;
