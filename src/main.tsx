import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components/ui/button";
import "@/themes/global.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <h1>Hello wordl</h1>
    <Button>texto</Button>
  </React.StrictMode>
);
