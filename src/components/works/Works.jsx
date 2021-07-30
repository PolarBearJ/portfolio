import { useState } from "react";
import "./works.scss";

export default function Works({theme}) {
  const light = theme === "light" ? true : false;
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Full Stack Dev @ Verto Inc.",
      desc:
        "Here I worked with a small team to deliver cutting edge technology for hospitals nation-wide.",
      img:
        "https://i.ibb.co/2hw8pzH/Screen-Shot-2021-07-29-at-9-59-10-PM.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Oncologie Center",
      desc:
        "At Verto, I helped build an oncology center for cancer patients who could no longer go to the hospital in person. Additionally I was the team lead for localizing the application for users in Quebec.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Online Vaccine Booking",
      desc:
        "I was a part of a team who helped build an online vaccination widget which has been used to book +3.5 Million vaccines in Canada!",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className={light ? 'works-light' : 'works-dark'} id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://i.ibb.co/2hw8pzH/Screen-Shot-2021-07-29-at-9-59-10-PM.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
