import { useEffect, useRef } from 'react';

const Skill = () => {

    const imageContainerRef = useRef(null);
    let scrollIntervalId = null;

  const startScrolling = () => {
    scrollIntervalId = setInterval(() => {
      if (imageContainerRef.current) {
        imageContainerRef.current.scrollLeft += 2; // Adjust the scroll speed (2 pixels) as needed
      }
    }, 50); // Adjust the interval time (50ms) as needed
  };

  const stopScrolling = () => {
    clearInterval(scrollIntervalId);
  };

  useEffect(() => {
    startScrolling();

    return () => {
      clearInterval(scrollIntervalId); // Clear interval on component unmount
    };
  }, []);

  let imageArray = [
    "https://oktayshakirov.com/assets/images/html.png",
    "https://oktayshakirov.com/assets/images/css.png",
    "https://oktayshakirov.com/assets/images/java-script.png",
    "https://oktayshakirov.com/assets/images/react.png",
    "https://oktayshakirov.com/assets/images/next.png",
    "https://oktayshakirov.com/assets/images/node.png",
    "https://oktayshakirov.com/assets/images/typescript.png",
    "https://oktayshakirov.com/assets/images/npm.png",
    "https://oktayshakirov.com/assets/images/php.png",
    "https://oktayshakirov.com/assets/images/mysql.png",
    "https://oktayshakirov.com/assets/images/python.png",
    "https://oktayshakirov.com/assets/images/linux.png",
    "https://oktayshakirov.com/assets/images/wordpress.png",
    "https://oktayshakirov.com/assets/images/github.png",
    "https://oktayshakirov.com/assets/images/git.png",
    "https://oktayshakirov.com/assets/images/photoshop.png",
    "https://oktayshakirov.com/assets/images/premierepro.png",
    "https://oktayshakirov.com/assets/images/aftereffects.png",
    "https://oktayshakirov.com/assets/images/blender.png"
  ];

  return (
    <div className="Skills">
      <h2>Development Skills</h2>
      <div className="SkillsContainer">
      <div
          ref={imageContainerRef}
          className="imagecontainer"
          onMouseEnter={stopScrolling} // Pause scrolling on mouse enter
          onMouseLeave={startScrolling} // Resume scrolling on mouse leave
        >
          {imageArray.map((image, i) => (
            <div className="ImageContainer" key={i}>
              <img src={image} alt="error" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
