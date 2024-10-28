import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App.jsx";
import ActivityProvider from "./contexts/ActivityProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ActivityProvider>
      <App />
    </ActivityProvider>
  </StrictMode>
);
