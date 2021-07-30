import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  software,
  hardware,
} from "../../data";

export default function Portfolio({theme}) {

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
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
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
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
