import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faJs } from '@fortawesome/free-brands-svg-icons';
import { faMobileAndroidAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
            <div className="skill">
            <FontAwesomeIcon icon={faMobileAndroidAlt as IconProp} lightingColor={"#db3030"}  color="#db3030" size="3x" />
                  <h3>Mobile development</h3>
                  <p>
                  I have 4+ years of experience in mobile development with Flutter and React Native. I specialize in clean architecture, SOLID principles, and tools like Flutter Bloc, Provider, Redux, and dependency injection. I work with both React Native CLI and Expo, focusing on creating high-quality, scalable, and maintainable mobile apps.
                  </p>
                 
              </div>

                

                <div className="skill">
                    <FontAwesomeIcon icon={faJs as IconProp} size="3x"/>
                    <h3>JavaScript Developer</h3>
                    <p>
                    I have extensive experience in JavaScript with React, Node.js, and TypeScript. I build dynamic web and mobile applications, using tools like Redux, Context API, RESTful APIs, and GraphQL. I focus on creating reusable components and maintaining clean, efficient, and scalable code.
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;