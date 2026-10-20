import { createContext, useState, useContext } from "react";
import { useEffect } from "react";

const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app_theme") || "light";
  });
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem("app_fontsize") || "medium";
  });

  useEffect(() => {
    localStorage.setItem("app_theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("app_fontsize", fontSize);
  }, [fontSize]);
  return (
    <ThemeContext value={{ theme, setTheme, fontSize, setFontSize }}>
      {children}
    </ThemeContext>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return useContext(ThemeContext);
}
