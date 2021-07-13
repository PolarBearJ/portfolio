import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Engineer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <Container>
          <figure className="position-relative">
              <div className="left">
              <div className="imgContainer">
                <img src="assets/pbjo.png" alt="" />
              </div>
              </div>
              <figcaption>
                  Hello, my name is Joshua Stevens
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
