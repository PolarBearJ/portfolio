import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import { ThemeProvider } from "styled-components";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
    const [lang, setLang] = useState("EN")
    const [theme, setTheme] = useState("light")
    const LightTheme = {
        pageBackground: "white",
        titleColor: "#dc658b",
        tagLineColor: "black"
    };
    const DarkTheme = {
        pageBackground: "#282c36",
        titleColor: "lightpink",
        tagLineColor: "lavender"
    }
    const themes = {
        light: LightTheme,
        dark: DarkTheme,
    }
  return (
      <ThemeProvider theme={themes[theme]}>
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} setTheme={setTheme} lang={lang}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} setTheme={setTheme} lang={lang} setLang={setLang}/>
     <div className="sections">
       <Intro theme={theme} lang={lang}/>
       <Portfolio theme={theme} lang={lang}/>
       <Works theme={theme} lang={lang}/>
       <Contact theme={theme} lang={lang}/>
     </div>
    </div>
      </ThemeProvider>
  );
}

export default App;
