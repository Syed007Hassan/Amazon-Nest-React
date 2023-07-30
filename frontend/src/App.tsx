import { ThemeProvider } from "@emotion/react";
import { theme } from "./shared/utils/theme";

function App() {
  return <ThemeProvider theme={theme}> hello</ThemeProvider>;
}

export default App;
