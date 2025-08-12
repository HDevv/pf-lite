import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { name: "JavaScript", level: "95%" },
    { name: "React.js", level: "90%" },
    { name: "React Native", level: "85%" },
    { name: "PHP", level: "90%" },
    { name: "Symfony", level: "85%" },
    { name: "Sylius", level: "80%" },
    { name: "Magento", level: "75%" },
    { name: "Linux", level: "85%" },
    { name: "SQL", level: "90%" },
    { name: "Bootstrap", level: "95%" },
    { name: "Tailwind", level: "90%" },
    { name: "Docker", level: "80%" },
    { name: "CSS", level: "95%" }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Compétences</h2>
              <p>
                Voici un aperçu de mes compétences techniques principales, 
                acquises au fil de mes expériences et projets. 
                Je continue constamment à les développer et à en apprendre de nouvelles.
              </p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="owl-carousel owl-theme skill-slider"
                autoPlay={true}
                autoPlaySpeed={3000}
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <div className="skill-item">
                      <h5>{skill.name}</h5>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar" 
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                      <span className="skill-percentage">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
