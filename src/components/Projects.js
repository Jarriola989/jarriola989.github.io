import React from "react";
import wise from "../images/projects/wise-code.png";
import geek from "../images/projects/geektext.png";
import rhaz from "../images/projects/rhaz.png";
import MiamiHacks from "../images/MiamiHacks.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";

const Projects = props => (
  <div className="projects">
    <div className="project1">
      <div className="flip">
        <div className="front">
          <img src={wise} alt="wise-code" />
        </div>
        <div className="back">
          <div className="project-name">
            <strong>Wise Code - Mobile</strong>
          </div>
          <div className="contributions">
            My Contributions:
            <ul>
              <li>
                Implemented and maintained Graphql API for data management app
                (WiseDB).
              </li>
              <li>Successfully created scripts to find and fix faulty data.</li>
              <li>
                Helped improve mutation efficiency and code cleanliness
                (refactoring).
              </li>
            </ul>
          </div>
          <div className="tech">
            Technologies used:
            <ul>
              <li>Graphql</li>
              <li>Prisma</li>
              <li>Yoga</li>
              <li>Redis</li>
              <li>Kubernetes</li>
              <li>Docker</li>
            </ul>
          </div>
          <div>
            <button>
              <FontAwesomeIcon icon={faLink} />
            </button>
            <button>
              <FontAwesomeIcon icon={faCode} />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="project2">
      <div className="flip">
        <div className="front">
          <img src={rhaz} alt="rhaz" />
        </div>
        <div className="back">
          <div className="project-name">
            <strong>RHAZ</strong>
          </div>
          <div className="contributions">
            My Contributions:
            <ul>
              <li>Implemented logic for alien movement and re-generation.</li>
            </ul>
          </div>
          <div className="tech">
            Technologies used:
            <ul>
              <li>Unity</li>
              <li>C#</li>
            </ul>
          </div>
          <div>
            <button>
              <FontAwesomeIcon icon={faLink} />
            </button>
            <button>
              <FontAwesomeIcon icon={faCode} />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="project3">
      <div className="flip">
        <div className="front">COMING SOON</div>
        <div className="back coming-soon"></div>
      </div>
    </div>
    <div className="project4">
      <div className="flip">
        <div className="front">
          <img src={geek} alt="geek-text" />
        </div>
        <div className="back">
          <div className="contribution-long">
            <strong>Geek Text</strong>
            My Contributions:
            <ul>
              <li>Implemented logic for alien movement and re-generation.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
