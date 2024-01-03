import Leftside from "../sideComponent/leftSide";
import "./main.css";
import { useState } from "react";
import About from "../About/About";
import Certificates from "../Certificates/Certificates";
import Projects from "../Project/Project";
import More from "../More/More";
import Contact from "../Contact/Contact";

const Main = () => {
  const [DisplayPage, setDisplayPage] = useState("About Me");

  const getDisplaypage = (value) => {
    setDisplayPage(value);
  };

  return (
    <div className="main">
      <Leftside />
      <div className="Rigtside">
        <div className="uppermain">
          <h1>
            {DisplayPage}
            <span></span>
          </h1>
          <div className="allButtons">
            <button className="Ab" onClick={() => getDisplaypage("About Me")}>
              About
            </button>
            <button onClick={() => getDisplaypage("Certificates")}>
              Certificates
            </button>
            <button onClick={() => getDisplaypage("Projects")}>Projects</button>
            <button onClick={() => getDisplaypage("More")}>More</button>
            <button className="Con" onClick={() => getDisplaypage("Contact")}>
              Contact
            </button>
          </div>
        </div>
        <div>
          {DisplayPage === "About Me" ? (
            <About />
          ) : DisplayPage === "Certificates" ? (
            <Certificates />
          ) : DisplayPage === "Projects" ? (
            <Projects />
          ) : DisplayPage === "More" ? (
            <More />
          ) : (
            <Contact />
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
