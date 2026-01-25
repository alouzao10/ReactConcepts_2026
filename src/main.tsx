import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

//  npm create vite@latest reactConcepts -- --template react-ts
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
