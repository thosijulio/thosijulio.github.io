import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [showDropDownMenu, setShowDropDownMenu] = useState(true);
  useEffect(() => {
    const buttons = document.querySelectorAll('header > a');

    if (showDropDownMenu) {
      Array.from(buttons).forEach((button) => button.style.display = 'inline');
    } else {
      Array.from(buttons).forEach((button) => button.style.display = 'none');
    }
  }, [showDropDownMenu]);
  return (
    <header>
      <i className="fa-solid fa-bars" onClick={() => setShowDropDownMenu(!showDropDownMenu)} />
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/contact">Contato</Link>
    </header>
  );
}

export default Header;
