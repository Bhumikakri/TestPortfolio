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
  const [activeButton, setActiveButton] = useState("About"); 

  const getDisplaypage = (value) => {
    setDisplayPage(value);
    setActiveButton(value.split(" ").join(""));
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
  <button
    className={activeButton === "AboutMe" ? "Ab active" : "Ab"}
    onClick={() => getDisplaypage("About Me")}
  >
    About
  </button>
  <button
    className={activeButton === "MyCertificates" ? "active" : ""}
    onClick={() => getDisplaypage("My Certificates")}
  >
    Certificates
  </button>
  <button
    className={activeButton === "MyProjects" ? "active" : ""}
    onClick={() => getDisplaypage("My Projects")}
  >
    Projects
  </button>
  <button
    className={activeButton === "SideProjects" ? "active" : ""}
    onClick={() => getDisplaypage("Side Projects")}
  >
    More
  </button>
  <button
    className={activeButton === "Contact" ? "Con active" : "Con"}
    onClick={() => getDisplaypage("Contact")}
  >
    Contact
  </button>
</div>

        </div>
        <div>
          {DisplayPage === "About Me" ? (
            <About />
          ) : DisplayPage === "My Certificates" ? (
            <Certificates />
          ) : DisplayPage === "My Projects" ? (
            <Projects />
          ) : DisplayPage === "Side Projects" ? (
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
