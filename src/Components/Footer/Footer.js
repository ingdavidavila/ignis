import React from 'react';
import logo from '../../assets/images/logo.png';
import { EMAIL, FACEBOOK_URL, INSTAGRAM_URL, QUOTE_MAILTO } from '../../siteConfig';
import { FacebookIcon, InstagramIcon } from '../Icons/Icons';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__top">
        <div className="footer__brand">
          <img src={logo} alt="" width="48" height="48" />
          <div>
            <p className="footer__name">Ignis Productions</p>
            <p className="footer__tagline">Video production · McAllen, TX</p>
          </div>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href={QUOTE_MAILTO}>{EMAIL}</a>
        </nav>

        <div className="footer__socials">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Ignis Productions on Instagram">
            <InstagramIcon />
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Ignis Productions on Facebook">
            <FacebookIcon />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Ignis Productions. All rights reserved.</p>
        <p>Powered by Ignis DevOps</p>
      </div>
    </div>
  </footer>
);

export default Footer;
