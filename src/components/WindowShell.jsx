import { TitleBar } from "./TitleBar";
import { StatusBar } from "./StatusBar";

export function WindowShell({ children, activeTab, setActiveTab }) {
  return (
    <div
      className="window window-roll-down"
      style={{
        width: "95vw",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        margin: "1vh auto",
      }}
    >
      <TitleBar />

      

      <menu role="tablist" style={{ margin: "10px 10px 0 10px" }}>
        
        {/* Personal Profile last */}
        <li role="tab" aria-selected={activeTab === "about"}>
          <a href="#about" onClick={() => setActiveTab("about")}>
            About_Me.usr
          </a>
        </li>

        {/* Work History second */}
        <li role="tab" aria-selected={activeTab === "experience"}>
          <a href="#experience" onClick={() => setActiveTab("experience")}>
            Work_History.log
          </a>
        </li>

                {/* Project Experience first */}
        <li role="tab" aria-selected={activeTab === "projects"}>
          <a href="#projects" onClick={() => setActiveTab("projects")}>
            Projects.exe
          </a>
        </li>
        
      </menu>

      <div
        className="window-body"
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          overflow: "hidden",
          padding: "10px",
        }}
      >
        {children}
      </div>

      <StatusBar />
    </div>
  );
}
