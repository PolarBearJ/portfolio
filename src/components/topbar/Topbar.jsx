import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            PolarBearJ
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>647-648-3126</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>jm5steve@uwaterloo.ca</span>
          </div>
          <div className="itemContainer">
            <GitHubIcon className="icon" />
            <span>github.com/PolarBearJ</span>
          </div>
          <div className="itemContainer">
            <LinkedInIcon className="icon" />
            <span>linkedin.com/in/joshua-m-stevens/</span>
          </div>
          <div className="itemContainer">
            <PictureAsPdfIcon className="icon" />
            <a href="assets/resume.pdf" without rel="noopener noreferrer" target="_blank">
                Resume
            </a>
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
