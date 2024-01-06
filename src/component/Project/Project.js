import { useState } from "react";
import { nanoid } from "nanoid";
import "./project.css";

const Projects = () => {
  const AllProject = [
    {
      Img: "https://oktayshakirov.com/assets/images/projects/mybestwishes.jpg",
      heading: "MyBestWishes AI Generator",
      category: "Design + Frontend",
      tech: "Figma | React.js | Chakra UI",
      previwLink: "https://",
      githubLink: "https://",
      type: "Websites",
    },
    {
      Img: "https://oktayshakirov.com/assets/images/projects/myworkphoto.png",
      heading: "MyWorkPhoto AI Generator",
      category: "Design + Frontend",
      tech: "Figma | React.js | Chakra UI",
      previwLink: "https://",
      githubLink: "https://",
      type: "Websites",
    },
    {
      Img: "https://oktayshakirov.com/assets/images/projects/ogno-dashboard.png",
      heading: "Ogno Marketing Dashboard",
      category: "Fullstack Project",
      tech: "React.js | Strapi.js | MySQL",
      previwLink: "https://",
      githubLink: "https://github.com/oktayshakirov/marketing-dashboard",
      type: "Applications",
    },
    {
      Img: "https://oktayshakirov.com/assets/images/projects/bayer-askmed.png",
      heading: "AskMed By Bayer",
      category: "Website + Chatbot",
      tech: "Drupal | PHP | CSS",
      previwLink: "https://askmed.bayer.com/",
      githubLink: "https://",
      type: "Websites",
    },
    {
      Img: "https://oktayshakirov.com/assets/images/projects/enemzet.png",
      heading: "EnEmZet Online Store",
      category: "Website + Admin Panel",
      tech: "Next.js | TypeScript | MySQL",
      previwLink: "https://enemzet.store/",
      githubLink: "https://github.com/En-Em-Zet",
      type: "Websites",
    },
    {
      Img: "https://oktayshakirov.com/assets/images/projects/tinnitus-blog.png",
      heading: "Beyond Tinnitus Blog",
      category: "Website",
      tech: "Next.js | TypeScript | Material-UI",
      previwLink: "https://www.beyondtinnitus.online/",
      githubLink: "https://github.com/oktayshakirov/tinnitus-blog",
      type: "Websites",
    },
    {
      Img: "https://oktayshakirov.com/assets/images/projects/pigletz-matching.png",
      heading: "Pigletz Memory Game",
      category: "Web Game",
      tech: "JavaScript | CSS",
      previwLink: "https://oktayshakirov.github.io/pigletz-matching/",
      githubLink: "https://github.com/oktayshakirov/pigletz-matching",
      type: "Games",
    },
    {
      Img: "https://oktayshakirov.com/assets/images/projects/portfolio.png",
      heading: "Personal Portfolio",
      category: "Website",
      tech: "JavaScript | CSS | HTML",
      previwLink: "https://oktayshakirov.com/",
      githubLink: "https://github.com/oktayshakirov/portfolio",
      type: "Websites",
    },
    {
      Img: "https://oktayshakirov.com/assets/images/projects/watch_store.png",
      heading: "Timeazon Online Store",
      category: "Website + Admin Panel",
      tech: "React.js | Node.js | MySQL | Sass",
      previwLink: "https://timeazon.netlify.app/",
      githubLink: "https://github.com/oktayshakirov/timeazon-fullstack",
      type: "Websites",
    },
    {
      Img: "https://oktayshakirov.com/assets/images/projects/weather-app.png",
      heading: "Weather App",
      category: "Application",
      tech: "JavaScript | API's | CSS",
      previwLink: "https://oktayshakirov.github.io/weather-app/",
      githubLink: "https://github.com/oktayshakirov/weather-app",
      type: "Applications",
    },
    {
      Img: "https://oktayshakirov.com/assets/images/projects/team-manager.png",
      heading: "Team Management Tool",
      category: "Application",
      tech: "PHP | CSV Data | CSS",
      previwLink: "https://oktayshakirov.000webhostapp.com/team-manager/",
      githubLink: "https://github.com/oktayshakirov/team-manager",
      type: "Applications",
    },
    {
      Img: "https://oktayshakirov.com/assets/images/projects/berlinew.jpg",
      heading: "BerliNEW Android App",
      category: "Application",
      tech: "Wordpress | Android SDK",
      previwLink: "https://berlinew.wordpress.com/",
      githubLink: "https://",
      type: "Applications",
    },
    {
      Img: "https://oktayshakirov.com/assets/images/projects/quiz.png",
      heading: "Quiz Time",
      category: "Game",
      tech: "PHP | CSS | HTML",
      previwLink: "https://oktayshakirov.000webhostapp.com/quiz/",
      githubLink: "https://github.com/oktayshakirov/quiz",
      type: "Games",
    },
  ];

  const [Section, setSection] = useState("All");
  const [dataArr, setDataArr] = useState(AllProject);
  const List = ["All", "Websites", "Applications", "Games"];

  const handleFilter = (item) => {
    setSection(item);
    let newDataArr = AllProject.filter((ele) => {
      return ele.type === item || item === "All";
    });
    setDataArr(newDataArr);
  };
  return (
    <div className="AllProjects">
      <div className="Projects">
        <ul className="filterlist">
          {List.map((item) => {
            return (
              <li
                key={nanoid()}
                className={
                  Section === item ? "filteritem selected" : "filteritem"
                }
                onClick={() => handleFilter(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <ul className="projectlist">
          {dataArr.map((project) => {
            return (
              <li key={nanoid()} className="projectitem">
                <a
                  href={project.previwLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure className="projectimg">
                    <img src={project.Img} alt="" />
                  </figure>
                </a>
                <h3 className="projecttitle">{project.heading}</h3>
                <p className="projectcategory">{project.category}</p>
                <p className="projectdevelopment">{project.tech}</p>
                <div className="projectbuttons">
                  <a
                    href={project.previwLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      pointerEvents:
                        project.previwLink === "https://" ? "none" : "auto",
                      opacity: project.previwLink === "https://" ? "0.6" : "1",
                    }}
                  >
                    <ion-icon name="eye-outline"></ion-icon>
                    Preview
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      pointerEvents:
                        project.previwLink === "https://" ? "none" : "auto",
                      opacity: project.previwLink === "https://" ? "0.6" : "1",
                    }}
                  >
                    <ion-icon name="logo-github"></ion-icon>
                    Github
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
