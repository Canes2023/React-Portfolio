import React from 'react';
import resumeImage from '../../assets/resume.jpg';
import './resume.css';
import resumePDF from '../../assets/resume.pdf';

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>Download my Resume Here</h2>
      <a href={resumePDF} download className="download-button">Download Resume PDF</a>
      <div className="image-container">
        <img src={resumeImage} alt="Resume" />
      </div>
    </div>
  );
}

export default Resume;
