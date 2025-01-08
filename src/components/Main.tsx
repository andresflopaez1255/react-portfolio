import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-dd96b.appspot.com/o/profile.jpg?alt=media&token=8983d88a-07ce-44c0-8eac-37e9541083d6" alt="Avatar" />
        </div>
        <div className="content">
         
          <h1>Andrés Flórez</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>

          <div className="social_icons">
            <a href="https://github.com/andresflopaez1255" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/andres-florez-111595197/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;