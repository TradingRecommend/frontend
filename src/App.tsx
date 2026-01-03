import React from "react";
import ThemeProvider from "./themes";
import Routes from "./router";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
