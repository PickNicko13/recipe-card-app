import React from 'react';
import { Link } from 'react-router';

const AboutPage: React.FC = () => {
  return (
    <div className="page about-page">
      <h2 className="page-title">About Recipe Card App</h2>
      <div className="about-content">
        <section className="about-section">
          <h3>What is it?</h3>
          <p>
            Recipe Card App is a client-side React application for storing, browsing,
            and managing personal recipe collections. It was built as a series of
            practical lab assignments demonstrating modern React concepts.
          </p>
        </section>
        <section className="about-section">
          <h3>Features</h3>
          <ul className="about-features-list">
            <li>📋 View your recipe cards with ingredients and details</li>
            <li>❤️ Like / unlike recipes, with a live counter in the header</li>
            <li>🔍 Search recipes by name or ingredient</li>
            <li>🎛️ Filter by difficulty or liked status</li>
            <li>➕ Add new recipes via a controlled form</li>
            <li>🗑️ Remove recipes from your list</li>
            <li>💾 Automatic persistence via localStorage</li>
            <li>✨ Live recipe suggestions fetched from DummyJSON API</li>
            <li>🌙 Light / Dark theme toggle</li>
          </ul>
        </section>
        <section className="about-section">
          <h3>Tech Stack</h3>
          <ul className="about-features-list">
            <li>React 19 + TypeScript</li>
            <li>Vite (build tool)</li>
            <li>React Router (client-side routing)</li>
            <li>localStorage (data persistence)</li>
            <li>DummyJSON API (external recipe data)</li>
          </ul>
        </section>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
};

export default AboutPage;
