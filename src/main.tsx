import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { DownloadProvider } from "./context/DownloadProvider.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DownloadProvider>
      <App />
    </DownloadProvider>
  </React.StrictMode>
);
