import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import styled from "styled-components";
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness3Icon from '@material-ui/icons/Brightness3';

const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    background-color: transparent;
    border: none;
    color: inherit;
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;


export default function Topbar({ menuOpen, setMenuOpen, theme, setTheme }){
  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const icon = theme === "light" ? <Brightness5Icon /> : < Brightness3Icon/>;
  const topbar = theme === "light" ? 'topbar-light' : 'topbar-dark';
  return (
    <div className={topbar + " " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            PolarBearJ
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>jm5steve@uwaterloo.ca</span>
          </div>
          <div className="itemContainer">
            <GitHubIcon className="icon" />
            <a href="https://github.com/PolarBearJ" className="resume">
              <span>github.com/PolarBearJ</span>
            </a>
          </div>
          <div className="itemContainer">
            <LinkedInIcon className="icon" />
            <a href="https://linkedin.com/in/joshua-m-stevens" className="resume">
              <span>linkedin.com/in/joshua-m-stevens</span>
            </a>
          </div>
          <div className="itemContainer">
            <PictureAsPdfIcon className="icon" />
            <a href="assets/resume.pdf" without rel="noopener noreferrer" target="_blank" className="resume">
                Resume
            </a>
          </div>
          <div className="itemContainer">
            <Toggle onClick={changeTheme}>
                {icon}
          </Toggle>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
