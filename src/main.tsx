import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@rate-perfect/beaconv2";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
