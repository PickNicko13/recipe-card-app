import React from 'react';
import { Link } from 'react-router';

const HomePage: React.FC = () => {
  return (
    <div className="page home-page">
      <div className="home-hero">
        <h2 className="home-title">🍳 Welcome to Recipe Card App</h2>
        <p className="home-subtitle">
          Discover, save, and manage your favourite recipes — all in one place.
        </p>
        <div className="home-actions">
          <Link to="/recipes" className="home-cta-btn">Browse Recipes →</Link>
          <Link to="/about" className="home-secondary-btn">About the App</Link>
        </div>
      </div>
      <div className="home-features">
        <div className="home-feature-card">
          <span className="home-feature-icon">🔍</span>
          <h3>Search</h3>
          <p>Find recipes by name or ingredient instantly.</p>
        </div>
        <div className="home-feature-card">
          <span className="home-feature-icon">🎛️</span>
          <h3>Filter</h3>
          <p>Browse by difficulty or show only your liked recipes.</p>
        </div>
        <div className="home-feature-card">
          <span className="home-feature-icon">➕</span>
          <h3>Add & Remove</h3>
          <p>Create your own recipe cards with a simple form.</p>
        </div>
        <div className="home-feature-card">
          <span className="home-feature-icon">💾</span>
          <h3>Saved Locally</h3>
          <p>Your recipes persist across page reloads via localStorage.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
