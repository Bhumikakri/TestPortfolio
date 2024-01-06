import "./leftside.css";
import { useState, useEffect } from "react";

const Leftside = () => {
  let [hello, setHello] = useState("");
  let [age, setAge] = useState(0);

  useEffect(() => {
    let i = 0;
    let timer = setInterval(() => {
      setHello(generateRandomBinary);
      if (i >=33 ) {
        setHello("Hello, World");
        clearInterval(timer);
      }
      if (i < 27) setAge(i);

      i++;
    }, 40);
  }, []);

  function generateRandomBinary() {
    let binaryNumber = "";
    for (let i = 0; i < 10; i++) {
      binaryNumber += Math.floor(Math.random() * 2); // Generates 0 or 1 randomly
    }
    return binaryNumber;
  }

  return (
    <div className="LeftSide">
      <div className="img">
        <img src="https://oktayshakirov.com/assets/images/avatar.jpg" />
        <h1>Oktay Shakirov</h1>
        <button>{hello}</button>
      </div>
      <div className="downcontaines">
        <div className="contents">
          <div className="icon">
            <i class="fa-solid fa-hourglass-half"></i>
          </div>
          <div className="iconsrelative">
            <p>AGE</p>
            <span>{age} years old</span>
          </div>
        </div>
        <div className="contents">
          <div className="icon">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div className="iconsrelative">
            <p>LOCATION</p>
            <span>Berlin, Germany</span>
          </div>
        </div>
        <div className="contents">
          <div className="icon">
            <i class="fa-solid fa-user"></i>
          </div>
          <div className="iconsrelative">
            <p>PERSONALITY TYPE</p>
            <span>INTJ-T</span>
          </div>
        </div>
        <div className="Linkicons">
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Leftside;
