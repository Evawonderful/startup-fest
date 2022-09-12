import logoLight from '../assets/logo-light.svg';
import logoDark from '../assets/logo-dark.svg';

import { ThemeContext } from "../contexts/theme";
import { useState, useContext } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);

  return (
    <div className='container'>
      <nav className="navigation">
      <a href="/" className="brand-name">
        {isDark ? <img src={logoDark} width="30%" alt="dark-logo"/> : <img src={logoLight}  alt="light-logo"/>}
      </a>
      <span
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill={theme.color}
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/speakers">SPEAKERS</a>
          </li>
          <li>
            <a href="/sponsors">SPONSORS</a>
          </li>
          <li>
            <a href="/hackathon">HACKATHON</a>
          </li>
          <li>
            <a href="/register">REGISTER</a>
          </li>
         
        </ul>
      </div>
    </nav>
    </div>
  );
}
