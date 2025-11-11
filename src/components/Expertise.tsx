import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faMobileAndroidAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import '../assets/styles/Expertise.scss';
import { useLanguage } from '../hooks/useContextLanguage';




function Expertise() {
    const {t} = useLanguage()
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>{t.expertise.title}</h1>
            <div className="skills-grid">
            <div className="skill">
            <FontAwesomeIcon icon={faMobileAndroidAlt as IconProp} lightingColor={"#db3030"}  color="#db3030" size="3x" />
                  <h3>{t.expertise.mobile.title}</h3>
                  <p>
                  {t.expertise.mobile.description}
                  </p>
                 
              </div>

                

                <div className="skill">
                    <FontAwesomeIcon icon={faJs as IconProp} size="3x"/>
                    <h3>{t.expertise.js.title}</h3>
                    <p>
                    {t.expertise.js.description}
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;