import { ThemeProvider } from "@emotion/react";
import React from "react";
import { theme } from "./shared/utils/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home.page";
import { SignInPage } from "./pages/Signin.page";
import { RegisterPage } from "./pages/Register.page";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
