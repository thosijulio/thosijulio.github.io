import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import showHeaderNavBar from "../helpers/showHeaderNavBar";
import "./Header.css";

function Header() {
  const [showDropDownMenu, setShowDropDownMenu] = useState(true);

  useEffect(() => {
    showHeaderNavBar(showDropDownMenu);
  }, [showDropDownMenu]);

  useEffect(() => {
    const dropDownBtnStyle = getComputedStyle(
      document.querySelector("#drop-down-btn")
    );
    if (dropDownBtnStyle.display === "block") {
      setShowDropDownMenu(false);
    }
  }, []);

  const handleNavClick = () => {
    const dropDownBtnStyle = getComputedStyle(
      document.querySelector("#drop-down-btn")
    );
    if (dropDownBtnStyle.display === "block") {
      setShowDropDownMenu(false);
    }
  };

  return (
    <header>
      <MdMenu
        id="drop-down-btn"
        fontSize="25px"
        onClick={() => setShowDropDownMenu(!showDropDownMenu)}
      />
      <nav id="header-nav-bar" className={showDropDownMenu ? "show" : ""}>
        <Link onClick={handleNavClick} to="/">
          Início
        </Link>
        <Link onClick={handleNavClick} to="/about">
          Sobre
        </Link>
        <Link onClick={handleNavClick} to="/projects">
          Projetos
        </Link>
        <Link onClick={handleNavClick} to="/contact">
          Contato
        </Link>
      </nav>
    </header>
  );
}

export default Header;
