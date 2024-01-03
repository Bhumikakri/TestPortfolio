import "./leftside.css";


const Leftside = () => {
  return (
    <div className="LeftSide">
      <div className="img">
        <img src="https://oktayshakirov.com/assets/images/avatar.jpg" />
        <h1>Oktay Shakirov</h1>
        <button>Hello, World</button>
      </div>
      <div className="downcontaines">
        <div className="contents">
          <div className="icon">
            <i class="fa-solid fa-hourglass-half"></i>
          </div>
          <div className="iconsrelative">
            <p>AGE</p>
            <span>29 years old</span>
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
