import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import useStyledTheme from "use-styled-theme";

const Component = () => {
  const { color } = useStyledTheme();

  return (
    <div style={{ backgroundColor: color }}>
      <h1>{color}</h1>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider theme={{ color: "#BADA55" }}>
      <Component />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
