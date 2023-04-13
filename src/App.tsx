import { useState } from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Characters />
      </div>
    </ThemeProvider>
  );
}

export default App;
