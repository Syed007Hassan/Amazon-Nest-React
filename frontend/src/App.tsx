import { ThemeProvider } from "@emotion/react";
import React from "react";
import { theme } from "./shared/utils/theme";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HomePage } from "./pages/Home.page";
import { SignInPage } from "./pages/Signin.page";
import { RegisterPage } from "./pages/Register.page";
import PrivateRoute from "./features/auth/components/PrivateRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute page={<HomePage />} />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
