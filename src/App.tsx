import { useState } from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import { ThemeProvider } from "./context/ThemeContext";
import { CharacterProvider } from "./context/CharacterContext";
import Favorites from "./components/Favorites";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CharacterProvider>
      <ThemeProvider>
        <div className="App">
          <Header />
          <Favorites />
          <Characters />
        </div>
      </ThemeProvider>
    </CharacterProvider>
  );
}

export default App;
