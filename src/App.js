import { createContext, useState } from "react";
import LandingPage from "./pages/LandingPage";
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div data-theme={theme} className="App w-full min-h-screen">
        <LandingPage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
