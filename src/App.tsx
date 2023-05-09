import { useState } from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import { ThemeProvider } from "./context/ThemeContext";
import { CharacterProvider } from "./context/CharacterContext";
import Favorites from "./components/Favorites";
import { useHover } from "./hooks/useHover";
import { GithubButton } from "react-github-link-button/dist";

function App() {
  return (
    <CharacterProvider>
      <ThemeProvider>
        <div className="App">
          <Header />
          <Favorites />
          <Characters />
        </div>
        <GithubButton
          href={"https://github.com"}
          message={"Check out my code!"}
        />
      </ThemeProvider>
    </CharacterProvider>
  );
}

export default App;
