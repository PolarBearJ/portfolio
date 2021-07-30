import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected, light }) {
  return (
    <li
      className={ active ? (light ? "portfolioList-light active-light" : "portfolioList-dark active-dark") : (light ? "portfolioList-light" : "portfolioList-dark")}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
