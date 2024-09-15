import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

function Skills() {
  return (
    <div>
      <h2>Skills</h2>

      {/* Front-End Skills Section */}
      <div className="skills-section">
        <h3>Front-End</h3>
        <ul>
          <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
          <li><FontAwesomeIcon icon={faCss3Alt} /> CSS</li>
          <li><FontAwesomeIcon icon={faJsSquare} /> JavaScript</li>
          <li><FontAwesomeIcon icon={faReact} /> React</li>
        </ul>
      </div>

      {/* Back-End Skills Section */}
      <div className="skills-section">
        <h3>Back-End</h3>
        <ul>
          <li><FontAwesomeIcon icon={faNodeJs} /> Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>SQL</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
