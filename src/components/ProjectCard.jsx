export function ProjectCard({ project }) {
  if (!project) return <p>Select a file to view properties...</p>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        minWidth: 0,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "15px",
          flexShrink: 0,
        }}
      >
        <div className="project-icon-box">
          <span style={{ fontSize: "20px" }}>📄</span>
        </div>
        <h3
          style={{
            margin: 0,
            fontSize: "26px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {project.title}
        </h3>
      </div>

      <hr />

      {/* Responsive Content Area */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexGrow: 1,
          marginTop: "12px",
          flexWrap: "wrap",
          minHeight: 0,
        }}
      >
        {/* Left: Text */}
        <div
          style={{
            flex: "1 1 320px", // responsive base width
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            minWidth: 0,
          }}
        >
          <div>
            <p style={{ margin: "4px 0" }}>
              <strong>Status:</strong> {project.status}
            </p>
            <p style={{ margin: "4px 0" }}>
              <strong>Architecture:</strong> {project.tech}
            </p>
          </div>

          <fieldset style={{ flexGrow: 1, minHeight: "120px" }}>
            <legend>Description</legend>
            <p
              style={{
                margin: 0,
                fontSize: "17px",
                lineHeight: "1.6",
              }}
            >
              {project.desc}
            </p>
          </fieldset>
        </div>

        {/* Right: Image (auto-fit instead of hard 40%) */}
        {project.image && (
          <div
            style={{
              flex: "1 1 360px", // responsive instead of fixed %
              maxWidth: "520px",
              display: "flex",
              flexDirection: "column",
              minHeight: "260px",
            }}
          >
            <fieldset
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <legend>Preview.bmp</legend>
              <div
                className="sunken-panel"
                style={{
                  backgroundColor: "#000",
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  padding: "6px",
                }}
              >
                <img
                  src={project.image}
                  alt="Project Preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    imageRendering: "pixelated",
                  }}
                />
              </div>
            </fieldset>
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        className="field-row"
        style={{
          justifyContent: "flex-end",
          marginTop: "16px",
          gap: "10px",
          flexShrink: 0,
        }}
      >
        {project.github && (
          <button onClick={() => window.open(project.github, "_blank")}>
            Open_Source.exe
          </button>
        )}
      </div>
    </div>
  );
}
