import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Greeting() {
  <h1>Hello World!</h1>;
}

root.render(
  <StrictMode>
    <App />
    <Greeting />
  </StrictMode>
);
