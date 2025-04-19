import React from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'About', anchor: '#about' },
    { label: 'Projects', anchor: '#projects' },
    { label: 'CV', anchor: '#cv' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#top">Katie Shaw</a>
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