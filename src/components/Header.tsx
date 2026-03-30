import { NavLink } from 'react-router';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  likedCount: number;
}

const Header: React.FC<HeaderProps> = ({ likedCount }) => {
  return (
    <header className="header">
      <div className="header-content">
        <NavLink to="/" className="logo-link">
          <h1 className="logo">Recipe Card App</h1>
        </NavLink>
        <nav className="navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Home</NavLink>
          <NavLink to="/recipes" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Recipes</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>About</NavLink>
          <span className="liked-count">
            ❤️ Liked: {likedCount}
          </span>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;