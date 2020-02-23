import React from "react";
import wise from "../images/projects/wise-code.png";
import geek from "../images/projects/geektext.png";
import rhaz from "../images/projects/rhaz.png";

const Projects = props => (
  <div className="projects">
    <div className="project1">
      <div className="flip">
        <div className="front">
          <img src={wise} alt="wise-code" />
        </div>
        <div className="back">Wise-code</div>
      </div>
    </div>
    <div className="project2">
      <div className="flip">
        <div className="front">
          <img src={rhaz} alt="rhaz" />
        </div>
        <div className="back">RHAZ</div>
      </div>
    </div>
    <div className="project3">
      <div className="flip">
        <div className="front">COMING SOON</div>
        <div className="back">COMING SOON</div>
      </div>
    </div>
    <div className="project4">
      <div className="flip">
        <div className="front">
          <img src={geek} alt="geek-text" />
        </div>
        <div className="back">Geek Text</div>
      </div>
    </div>
  </div>
);

export default Projects;
