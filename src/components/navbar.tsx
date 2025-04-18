import React from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'About', anchor: '#top' },
    { label: 'Projects', anchor: '#projects' },
    { label: 'CV', anchor: '#cv' },
    { label: 'Contact', anchor: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#top">MyPortfolio</a>
        </div>
        <ul className="navbar-links">
          {navItems.map(({ label, anchor }) => (
            <li key={label}>
              <a href={anchor}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;