import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

export default function Intro({theme}) {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Engineer", "Student"],
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
                  Hello, my name is Joshua Stevens
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
