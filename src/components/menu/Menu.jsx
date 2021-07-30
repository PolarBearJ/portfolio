import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen, lang, setLang }) {
  var en = {
    "Home": "Home",
    "Projects": "Projects",
    "Works": "Works",
    "Contact": "Contact"

  }
  var fr = {
    "Home": "Accueil",
    "Projects": "Projets",
    "Works": "Travaux",
    "Contact": "Contact"
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
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={() => {
          setMenuOpen(false);
          setLang("EN");
        }}>
          <a>EN</a>
        </li>
        <li onClick={() => {
          setMenuOpen(false);
          setLang("FR");
        }}>
          <a>FR</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">{la["Home"]}</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">{la["Projects"]}</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">{la["Works"]}</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">{la["Contact"]}</a>
        </li>
      </ul>
    </div>
  );
}
