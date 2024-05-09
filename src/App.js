import { createContext, useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import Lenis from "lenis";
import { HashRouter } from "react-router-dom";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("cupcake");
  // // LENIS SMOOTH SCROLL
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <HashRouter>
        <div data-theme={theme} className="App w-full min-h-screen">
          <LandingPage />
        </div>
      </HashRouter>
    </ThemeContext.Provider>
  );
}

export default App;
