import React from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  likedCount: number;
}

const Header: React.FC<HeaderProps> = ({ likedCount }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Recipe Card App</h1>
        <nav className="navigation">
          <span className="liked-count" style={{ marginRight: '1rem' }}>
            ❤️ Liked: {likedCount}
          </span>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;