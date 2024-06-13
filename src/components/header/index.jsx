import { useState } from "react";
import "./style.css";
import websiteLogo from "../../assets/images/Website-Logo.svg";
import hamburgMenu from "../../assets/images/hamburg-menu-icons.svg";
import searchIcon from "../../assets/images/search-icons.svg";
import userIcon from "../../assets/images/user-icons.svg";
import shopingIcon from "../../assets/images/shop-icons.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src={websiteLogo} alt="websiteLogo" />
      </div>
      <div className="right-side-nav">
        <div className="right-side-nav">
          <nav className={`nav-links ${isOpen ? "open" : ""}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#shop">Shop</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="right-side-nav">
          <div className="icons">
            <img src={searchIcon} alt="searchIcon" className="icons" />
            <img src={shopingIcon} alt="shopingIcon" className="icons" />
            <img src={userIcon} alt="userIcon" className="icons" />
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <img src={hamburgMenu} alt="hamburger menu" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
