import React from 'react';
import cryptosandcomics from '../../assets/cryptosandcomics.jpg';
import weatherdashboard from '../../assets/weatherdashboard.jpg';
import './work.css';


const Work = () => {
  return (
    <div className="work-container">
      <div className="work-item">
        <h3>Project 1</h3>
        <p>I collaborated with a group of three other members on this project to create "Cryptos and Comics".</p>
        <div className = "imagecontainer">
            <img src={cryptosandcomics} alt="" />
        </div>
      </div>
      <div className="work-item">
        <h3>Project 2</h3>
        <p>Here I created a Weather Dashboard for one of my assignments.</p>
        <div className = "imagecontainer">
            <img src={weatherdashboard} alt="" />
        </div>
      </div>
      {/* Add more work items as needed */}
    </div>
  );
};

export default Work;
