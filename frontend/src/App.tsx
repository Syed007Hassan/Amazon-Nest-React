import { ThemeProvider } from "@emotion/react";
import React from "react";
import { theme } from "./shared/utils/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}> hello</ThemeProvider>;
    </div>
  );
}

export default App;
