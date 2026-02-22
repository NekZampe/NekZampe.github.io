import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "./ProjectCard";

export function ProjectTree() {
  const { t } = useTranslation();

  const [selected, setSelected] = useState(() => {
    return sessionStorage.getItem("selectedProject") || "surveillance";
  });

  useEffect(() => {
    sessionStorage.setItem("selectedProject", selected);
  }, [selected]);

  const projects = t("projects_data", { returnObjects: true });
  const currentProject = projects[selected];

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexGrow: 1,
        height: "100%",
        padding: "8px",
        overflow: "hidden",
        minHeight: 0,
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "180px",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <ul
          className="tree-view"
          style={{
            backgroundColor: "white",
            flexGrow: 1,
            overflowY: "auto",
            margin: 0,
            padding: "4px",
          }}
        >
          {Object.keys(projects).map((key) => (
            <li key={key} onClick={() => setSelected(key)}>
              <span
                className={selected === key ? "active-selection" : ""}
                style={{
                  cursor: "pointer",
                  display: "block",
                  padding: "4px 6px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontWeight: selected === key ? "bold" : "normal",
                }}
              >
                {projects[key].title}
              </span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Panel */}
      <main
        className="sunken-panel"
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          padding: "20px",
          overflow: "auto",
          minWidth: 0,
          minHeight: 0,
          display: "flex",
        }}
      >
        <ProjectCard project={currentProject} />
      </main>
    </div>
  );
}
