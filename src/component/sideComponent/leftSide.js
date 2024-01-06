import "./leftside.css";
import { useState, useEffect } from "react";

const Leftside = () => {
  let [hello, setHello] = useState(""); // State for "hello" message
  let [age, setAge] = useState(0); // State for "age"

  useEffect(() => {
    let i = 0;
    // Use setInterval to update states gradually
    let timer = setInterval(() => {
      setHello(RandomBinary); // Set "hello" to random binary numbers

      if (i >= 33) {
        setHello("Hello, World"); // After a certain count, set "hello" to "Hello, World"
        clearInterval(timer); // Clear the interval
      }

      if (i < 27) setAge(i); // Set "age" up to 27

      i++;
    }, 40); // Timer interval
  }, []);

  // Function to generate random binary numbers
  function RandomBinary() {
    let binaryNumber = "";
    for (let i = 0; i < 10; i++) {
      binaryNumber += Math.floor(Math.random() * 2); // Random binary numbers
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
