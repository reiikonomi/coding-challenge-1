import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import store from "./store";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.render(
  <ThemeProvider>
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
