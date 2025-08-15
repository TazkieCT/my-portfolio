import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { SettingsProvider } from "./context/SettingsContext";
import Experience from "./pages/Experience";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SettingsProvider>
      <BrowserRouter>
        <Routes>
          {/* Layout jadi pembungkus */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="project" element={<Project />} />
            <Route path="experience" element={<Experience />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SettingsProvider>
  </StrictMode>
);
