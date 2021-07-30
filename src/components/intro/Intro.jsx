import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

export default function Intro({theme, lang}) {
  const textRef = useRef();
  var en = {
      "Developer": "Developer",
      "Engineer": "Engineer",
      "Student": "Student",
      "introduction": "Hello, my name is Joshua Stevens"

  }
  var fr = {
      "Developer": "Développeur",
      "Engineer": "Ingénieur",
      "Student": "Étudiant",
      "introduction": "Bonjour, je m'appelle Joshua Stevens"
  }
  var la = {}
  switch(lang){
      case "EN":
          la = en;
          break;
      case "FR":
          la = fr
          break;
      default:
          la = en;
          break;
  }
  var strings = [la["Developer"], la["Engineer"], la["Student"]];

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: strings,
    });
  }, []);
    const light = theme === "light" ? true : false;
    const bear = theme === "light" ? "assets/pbjo.png" : "assets/pbjo-dark.png"
  return (
    <div className={light ? 'intro-light' : 'intro-dark'} id="intro" >
      <Container>
          <figure className="position-relative">
              <div className="left">
              <div className="img-fluid slow-trans">
                <img src={bear} alt=""/>
              </div>
              </div>
              <figcaption>
                  <div style={{
                      color: light ? 'black' : 'white'
                  }}>
                      {la["introduction"]}
                  </div>
                  <div className="wrapper">
                  <h3>
                  <span ref={textRef}></span>
                  </h3>
                  </div>
              </figcaption>
          </figure>
          <a href="#portfolio">
              <img src="assets/down.png" alt="" />
          </a>
      </Container>
    </div>
  );
}
