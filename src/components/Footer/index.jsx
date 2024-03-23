import React from 'react';
import './footer.css';

const Footer = () => {
 return (
    <div className="container">
      <div className="content">
        {/* Your page content goes here */}
      </div>
      <div className="footer">
        <p>&copy; 2024 David Cabrera. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/Canes2023" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/yourLinkedInUsername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://stackoverflow.com/users/yourStackOverflowId" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
          {/* Add more links as needed */}
        </div>
      </div>
    </div>
 )
}

export default Footer;