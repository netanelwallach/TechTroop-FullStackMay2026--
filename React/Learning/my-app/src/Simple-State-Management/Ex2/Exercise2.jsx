import { useState } from "react";
import ThemeProvider, { useTheme } from "./ThemeContext";

function App2() {
  //   const [theme, setTheme] = useState("light");
  //   const [fontSize, setFontSize] = useState("medium");

  return (
    <ThemeProvider>
      <Layout
      //   theme={theme}
      //   setTheme={setTheme}
      //   fontSize={fontSize}
      //   setFontSize={setFontSize}
      />
    </ThemeProvider>
  );
}

function Layout() {
  const { theme } = useTheme();

  const bgColor = theme === "light" ? "#ffffff" : "#1a1a1a";
  const color = theme === "light" ? "#000000" : "#ffffff";

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Header
      // theme={theme}
      // setTheme={setTheme}
      // fontSize={fontSize}
      // setFontSize={setFontSize}
      />
      <Content
      //   theme={theme} fontSize={fontSize}
      />
    </div>
  );
}

function Header() {
  return (
    <header style={{ marginBottom: "20px" }}>
      <Navigation
      //   theme={theme} fontSize={fontSize}
      />
      <Controls
      // theme={theme}
      // setTheme={setTheme}
      // fontSize={fontSize}
      // setFontSize={setFontSize}
      />
    </header>
  );
}

function Navigation() {
  const { fontSize } = useTheme();
  const size =
    fontSize === "small" ? "14px" : fontSize === "large" ? "20px" : "16px";

  return (
    <nav style={{ fontSize: size, marginBottom: "10px" }}>
      <a href="#home">Home</a> | <a href="#about">About</a> |{" "}
      <a href="#contact">Contact</a>
    </nav>
  );
}

function Controls() {
  return (
    <div>
      <ThemeToggle
      //   theme={theme} setTheme={setTheme}
      />
      <FontControl
      //   fontSize={fontSize} setFontSize={setFontSize}
      />
    </div>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

function FontControl() {
  const { fontSize, setFontSize } = useTheme();
  return (
    <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
  );
}

function Content() {
  const { fontSize } = useTheme();
  const size =
    fontSize === "small" ? "14px" : fontSize === "large" ? "20px" : "16px";

  return (
    <main style={{ fontSize: size }}>
      <Article
      //   theme={theme}
      />
      <Sidebar
      //    theme={theme}
      />
    </main>
  );
}

function Article() {
  const { theme } = useTheme();
  return (
    <article>
      <h1>Article Title</h1>
      <p>
        This content uses the {theme} theme. Notice how theme props are passed
        through every component!
      </p>
    </article>
  );
}

function Sidebar() {
  const { theme } = useTheme();
  return (
    <aside
      style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}
    >
      <h3>Sidebar</h3>
      <p>Current theme: {theme}</p>
    </aside>
  );
}

export default App2;
