import React from 'react';
import "./Footer.css"
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiHome2Line, RiUserLine, RiBriefcaseLine, RiTeamLine, RiMailLine } from 'react-icons/ri';

function Footer() {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.instagram.com/Chandanverma010">
            <FaInstagram />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://twitter.com/chandanverma010">
            <FaTwitter />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://github.com/Framework12">
            <FaGithub />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.linkedin.com/in/chandan-verma-a30b70271/">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="#">
            <RiHome2Line /> Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            <RiUserLine /> About
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            <RiBriefcaseLine /> Services
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            <RiTeamLine /> Team
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            <RiMailLine /> Contact
          </a>
        </li>
      </ul>
      <p>&copy;2024 ChandanVerma | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
