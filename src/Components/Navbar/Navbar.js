import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png';
import { CloseIcon, MenuIcon } from '../Icons/Icons';
import './Navbar.css';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label="Ignis Productions home" onClick={close}>
          <img src={logo} alt="" width="40" height="40" />
          <span>
            IGNIS<span className="nav__dot">.</span>
          </span>
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav id="nav-menu" className={`nav__menu ${open ? 'is-open' : ''}`} aria-label="Main">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav__link" onClick={close}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary nav__cta" onClick={close}>
            Get a quote
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
