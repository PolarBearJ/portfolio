import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  software,
  hardware,
} from "../../data";

export default function Portfolio({theme, lang}) {
  var en = {
    "Projects": "Projects",
    "Featured": "Featured",
    "Software": "Software",
    "Hardware": "Hardware",
    "This Website (React)": "This Website (React)",
    "Top Down video game (Java)": "Top Down video game (Java)",
    "White Noise Remover (Python)": "White Noise Remover (Python)",
    "3D Printer": "3D Printer",
    "CNC Plotter": "CNC Plotter",
    "Sudoku Solver (C)": "Sudoku Solver (C)",
    "False-Position (MATLAB)": "False-Position (MATLAB)",
    "Slapshot! (JavaFX)": "Slapshot! (JavaFX)",
    "CPU Fan": "CPU Fan",
    "Remote Control Light Switch": "Remote Control Light Switch"
  }
  var fr = {
    "Projects": "Projets",
    "Featured": "En vedette",
    "Software": "Logiciel",
    "Hardware": "Matériel",
    "This Website (React)": "Ce site Web (React)",
    "Top Down video game (Java)": "Jeu vidéo de haut en bas (Java)",
    "White Noise Remover (Python)": "Suppresseur de bruit blanc (Python)",
    "3D Printer": "Imprimante 3D",
    "CNC Plotter": "Traceur CNC",
    "Sudoku Solver (C)": "Solveur de Sudoku (C)",
    "False-Position (MATLAB)": "Fausse-Position (MATLAB)",
    "Slapshot! (JavaFX)": "Slapshot! (JavaFX)",
    "CPU Fan": "Ventilateur de CPU",
    "Remote Control Light Switch": "Interrupteur d'éclairage à télécommande"
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

  const light = theme === "light" ? true : false;

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "software",
      title: "Software",
    },
    {
      id: "hardware",
      title: "Hardware",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "software":
        setData(software);
        break;
      case "hardware":
        setData(hardware);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className={light ? 'portfolio-light' : 'portfolio-dark'} id="portfolio">
      <h1>{la["Projects"]}</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={la[item.title]}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            light={light}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{la[d.title]}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
