import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import SeparateOptions from "./SeparateOptions";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <h3>combined component:</h3>
    <App />
    <h3>separated components:</h3>
    <SeparateOptions />
  </StrictMode>
);
