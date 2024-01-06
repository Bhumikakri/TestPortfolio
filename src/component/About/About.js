import "./about.css";
import Para from "./Para";
import PrimeryF from "./Primaryfocus";
import Explor from "./Exploring";
import ProgramLanguage from "./ProgramingLang";
import HumanLanguage from "./HumanLang";
import Skill from "./Skill";
import FavActivities from "./FavActivites";
// import React, { useState } from "react";

const About = () => {


  return (
    <div className="About">
       <Para/>
       <PrimeryF/>
       <Explor />
       <ProgramLanguage />
       <HumanLanguage />
       <Skill />
       <FavActivities />
    </div>
  );
};
export default About;
