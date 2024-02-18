import React from "react";
import ReactDOM from "react-dom/client";
import Playground from "./playground/Playground";

import "./styles/main.css"
import "./styles/tailwind.css";

import "./playground/playground.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Playground />
  </React.StrictMode>,
);
