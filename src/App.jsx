import { useState, useEffect } from "react";
import { WindowShell } from "./components/WindowShell";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";

function App() {
  const [activeTab, setActiveTab] = useState(() => {
    return sessionStorage.getItem("activePortfolioTab") || "projects";
  });

  useEffect(() => {
    sessionStorage.setItem("activePortfolioTab", activeTab);
  }, [activeTab]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <WindowShell activeTab={activeTab} setActiveTab={setActiveTab}>
        {activeTab === "projects" && <Projects />}
        {activeTab === "experience" && <Experience />}
        {activeTab === "about" && <AboutMe />}
      </WindowShell>
    </div>
  );
}

export default App;
