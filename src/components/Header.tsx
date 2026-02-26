import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Recipe Card App</h1>
        <nav className="navigation">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;