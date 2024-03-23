import React from 'react';
import cryptosandcomics from '../../assets/cryptosandcomics.jpg';
import weatherdashboard from '../../assets/weatherdashboard.jpg';
import footballfund from '../../assets/footballfund.jpg';
import workday from '../../assets/workday.jpg';
import notetaker from '../../assets/notetaker.jpg';
import jate from '../../assets/jate.jpg';
import './work.css';

const Work = () => {
  return (
    <div className="work-container">
      <div className="work-row">
        <a href="https://dannysaravia001.github.io/Cryptos-and-Comics/" target="_blank" rel="noopener noreferrer">
          <div className="work-item">
            <h3>Project 1</h3>
            <p>I collaborated with a group of three other members on this project to create "Cryptos and Comics".</p>
            <div className="imagecontainer">
              <img src={cryptosandcomics} alt="Cryptos and Comics" className="project-image" />
            </div>
          </div>
        </a>
        <a href="https://football-fund-eebee0c03eff.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <div className="work-item">
            <h3>Project 3</h3>
            <p>I created a football fund app so that the user can donate a specific amount of money or donate a pre made amount from the drop down. The goal is to reach $10,000 but the user can continue donating past this amount.</p>
            <div className="imagecontainer">
              <img src={footballfund} alt="Football Fund" className="project-image" />
            </div>
          </div>
        </a>
        <a href="https://text-editordc.onrender.com/" target="_blank" rel="noopener noreferrer">
          <div className="work-item">
            <h3>Project 5</h3>
            <p>For this app, I was asked to fix the J.A.T.E application terminal and I did. The user can now add console logs to the terminal or anything they want and the software will see it. I also fixed the install button so the user can now install JATE on their system. </p>
            <div className="imagecontainer">
              <img src={jate} alt="Jate" className="project-image" />
            </div>
          </div>
        </a>
      </div>
      <div className="work-column">
        <a href="https://canes2023.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
          <div className="work-item"/>
            <h3>Project 2</h3>
            <p>Here I created a Weather Dashboard for one of my assignments. I had to use a weather api to make the app work.</p>
            <div className="imagecontainer">
              <img src={weatherdashboard} alt="Weather Dashboard" className="project-image" />
          </div>
        </a>
        <a href="https://stark-bastion-59975-57b4d0bb8d9f.herokuapp.com/notes" target="_blank" rel="noopener noreferrer">
          <div className="work-item">
            <h3>Project 4</h3>
            <p>I was tasked to fix the note taker application and it successfully works now. The user is now able to create notes and view them.</p>
            <div className="imagecontainer">
              <img src={notetaker} alt="Note Taker" className="project-image" />
            </div>
          </div>
        </a>
        <a href="https://canes2023.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer">
          <div className="work-item">
            <h3>Project 6</h3>
            <p>I was tasked to fix the work day scheduler. The user can add tasks to complete in their scheduler and view them in local storage afterwards.</p>
            <div className="imagecontainer">
              <img src={workday} alt="Work Day" className="project-image" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Work;
