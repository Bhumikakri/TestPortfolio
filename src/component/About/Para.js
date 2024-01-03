import React, { useState } from "react";

const Para = () => {
  const [isToggled, setIsToggled] = useState(true);

  const toggleState = () => {
    setIsToggled((prevState) => !prevState);
  };
  return (
    <div className="Para">
      {isToggled ? (
        <p>
          Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a
          Full-Stack software developer, I specialize in creating visually
          appealing websites, apps and mobile games. My passion for graphic
          design isn't just a hobby, it's a key ingredient in every project I
          work on.
        </p>
      ) : (
        <p>
          Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a
          Full-Stack software developer, I specialize in creating visually
          appealing websites, apps and mobile games. My passion for graphic
          design isn't just a hobby, it's a key ingredient in every project I
          work on.
          <br />
          Growing up bilingual, I developed a love for languages and I currently
          speak four of them fluently. I believe that this skill has given me a
          unique perspective and allows me to communicate effectively with
          clients from all over the world. One of my strengths is adding a
          personal touch to my projects by adding the client's identity and
          message into the design, creating meaningful and beautiful end
          products that are both eye-catching and user-friendly.
          <br />
          In my free time, I enjoy exploring my other passions, such as
          photography and music production, which provide me with creative
          outlets. I am also very passionate about Web3 and everything related
          to crypto, NFTs and blockchain technology as I believe they have the
          potential to revolutionize business and online interactions.
          <br />
          If you have an innovative idea for a project that needs to be
          developed, I would love to hear from you. Your vision can be turned
          into a real product. Don't hesitate to reach out and let's start a
          conversation about your concept. I'm excited to collaborate and help
          bring your ideas to life.
        </p>
      )}
      {isToggled ? (
        <button onClick={toggleState}>⬇ Show More ⬇</button>
      ) : (
        <button onClick={toggleState}>⬆ Hide Text ⬆</button>
      )}
    </div>
  );
};

export default Para;
