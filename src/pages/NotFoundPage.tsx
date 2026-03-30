import React from 'react';
import { Link } from 'react-router';

const NotFoundPage: React.FC = () => {
  return (
    <div className="page not-found-page">
      <div className="not-found-content">
        <span className="not-found-icon">🍽️</span>
        <h2 className="not-found-title">404 — Page Not Found</h2>
        <p className="not-found-text">
          Looks like this recipe doesn't exist. The page you are looking for may
          have been removed or the URL is incorrect.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="home-cta-btn">← Back to Home</Link>
          <Link to="/recipes" className="home-secondary-btn">Browse Recipes</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
