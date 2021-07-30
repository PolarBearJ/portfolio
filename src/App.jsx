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
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} setTheme={setTheme}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} setTheme={setTheme}/>
     <div className="sections">
       <Intro theme={theme}/>
       <Portfolio theme={theme}/>
       <Works theme={theme}/>
       <Contact theme={theme}/>
     </div>
    </div>
      </ThemeProvider>
  );
}

export default App;
