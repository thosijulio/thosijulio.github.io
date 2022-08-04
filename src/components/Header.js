import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import showHeaderButtons from '../helpers/showHeaderButtons';
import './Header.css';

function Header() {
  const [showDropDownMenu, setShowDropDownMenu] = useState(true);

  useEffect(() => {
    showHeaderButtons(showDropDownMenu);
  }, [showDropDownMenu]);

  useEffect(() => {
    const dropDownBtnStyle = getComputedStyle(document.querySelector('#drop-down-btn'));
    if (dropDownBtnStyle.display === 'block') {
      setShowDropDownMenu(false);
    }
  }, []);

  return (
    <header>
      <i className="fa-solid fa-bars" id="drop-down-btn" onClick={() => setShowDropDownMenu(!showDropDownMenu)} />
      <Link onClick={() => setShowDropDownMenu(false)} to="/">Home</Link>
      <Link onClick={() => setShowDropDownMenu(false)} to="/about">Sobre</Link>
      <Link onClick={() => setShowDropDownMenu(false)} to="/projects">Projetos</Link>
      <Link onClick={() => setShowDropDownMenu(false)} to="/contact">Contato</Link>
    </header>
  );
}

export default Header;
