import React from 'react'
import david from '../../assets/david.jpg'
import './about.css'


<link href="https://fonts.google.com/share#how-to-use?selection.family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900" rel="stylesheet"></link>
const About = () => {
  return (
    <div className = "AboutContainer">
        <div className = "imagecontainer">
            <img src={david} alt="" />
        </div>
        <div className = "AboutMeContent">
            <h1>About Me</h1>
            <p>My name is David Cabrera and I am web developer. I have a passion for coding and love to create websites and applications that are visually appealing and provide a great user experience. I am a full stack developer and have experience with HTML, CSS, JavaScript, React, Node, MongoDB, and more. I am a quick learner and am always looking to expand my skillset. I am a hard worker and am always looking to improve my skills and learn new technologies. I am a team player and work well with others. I am also a great problem solver and am able to think on my feet and come up with creative solutions to complex problems. I am a great communicator and am able to clearly explain complex technical concepts to non-technical people. I am also able to work with clients to understand their needs and create a product that meets their requirements. I am a great developer and am always looking to improve my skills and learn new technologies.</p>
        </div>
    </div>
  )
}

export default About
