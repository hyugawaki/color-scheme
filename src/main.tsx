import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/layouts/App.tsx";
import "../src/assets/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
