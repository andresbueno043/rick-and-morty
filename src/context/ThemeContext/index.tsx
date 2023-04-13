import { type } from "os";
import React, { useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
