import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { HabitProvider } from "./context/HabitContext";

const root2 = createRoot(document.getElementById("root2"));
root2.render(
  <React.StrictMode>
    <BrowserRouter>
      <HabitProvider>
        <App />
      </HabitProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
