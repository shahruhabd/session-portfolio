import React, { useState } from "react";
import Photos from "../photos/Photos";
import Contact from "../contact/Contact";
import Projects from "../projects/Projects";
import "./main.css";

const Main = () => {
  const [content, setContent] = useState(<Projects/>)
  const [active, setActive] = useState()
  const [active2, setActive2] = useState()
  const [active3, setActive3] = useState(!active)

  const handlePhoto = () => {
    setContent(<Photos/>)
    setActive(!active)
    setActive2()
    setActive3()
  }
  const handleContact = () => {
    setContent(<Contact/>)
    setActive2(!active2)
    setActive()
    setActive3()

  }
  const handleProjects = () => {
    setContent(<Projects/>)
    setActive3(!active3)
    setActive()
    setActive2()
  }
  return (
    <div className="main-container">
      <div className="about_me">
        <div className="name">SHAKHRUKH ABDUGAPAR</div>
        <div className="aboutMe">ALMAU STUDENT | FRONTEND DEVELOPER</div>
        <div className="btns">
          <button onClick={handlePhoto} 
          // className="btn"
          className={active ? "btn active" : "btn deactive"}
          >photo</button>
          <button onClick={handleContact} className={active2 ? "btn active2" : "btn deactive2"}>contact</button>
          <button onClick={handleProjects} className={active3 ? "btn active3" : "btn deactive3"}>projects</button>
        </div>
      </div>
      <div className="content">
        {content}
      </div>
    </div>
  );
};

export default Main;
