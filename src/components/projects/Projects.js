import React from "react";
import "./projects.css";
import DataBase from '../../projects.json'
import Comments from "../comments/Comments";
// import images from './'
const Projects = () => {
  return (
    <div className="proj-container">
      {
        DataBase && DataBase.map(proj => {
          return(
            <div className="project" key= {proj.id}>
              <div className="proj-title">{proj.title}</div>
              <p>{proj.desc}</p>
                <div>
                  GitHub: <a className="proj-link" href={proj.githubLink}>{proj.githubLink}</a>
                </div>
                <div>
                  Host: <a className="proj-link" href={proj.siteLink}>{proj.siteLink}</a>
                </div>
              <img className="proj-icon" src={proj.icon} alt={proj.title}/>
              <Comments/>
            </div>
          )
        })
      }
      <img src="${work.img}"/>
    </div>
  );
};

export default Projects;
