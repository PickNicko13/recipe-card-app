import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Recipe Card App. All rights reserved.</p>
        <p>Built with React and Vite</p>
      </div>
    </footer>
  );
};

export default Footer;