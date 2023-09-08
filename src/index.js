import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function HelloWorld() {
  return <h1>Hello world!</h1>;
}

root.render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>
);
