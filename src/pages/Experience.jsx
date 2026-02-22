import { useTranslation } from "react-i18next";

export function Experience() {
  const { t } = useTranslation();
  const exp = t("experience_data", { returnObjects: true });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "5px",
      }}
    >
      <fieldset
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        <legend>Employment_History.log</legend>

        <div
          className="sunken-panel"
          style={{
            backgroundColor: "white",
            flexGrow: 1,
            padding: "25px",
            overflowY: "auto",
          }}
        >
          <ul className="tree-view">
            {Object.keys(exp).map((key) => (
              <li
                key={key}
                style={{ marginBottom: "30px", listStyleType: "none" }}
              >
                {/* Job Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    borderBottom: "1px dotted #808080",
                  }}
                >
                  <strong style={{ fontSize: "20px", color: "#000080" }}>
                    {exp[key].company}
                  </strong>
                  <span style={{ fontWeight: "bold" }}>{exp[key].period}</span>
                </div>

                <div
                  style={{
                    margin: "5px 0 10px 0",
                    fontStyle: "italic",
                    fontWeight: "bold",
                  }}
                >
                  {exp[key].role} — {exp[key].location}
                </div>

                {/* Technical Tasks as Tree Items */}
                <ul style={{ marginTop: "10px" }}>
                  {exp[key].bullets.map((bullet, index) => (
                    <li
                      key={index}
                      style={{
                        fontSize: "16px",
                        marginBottom: "8px",
                        lineHeight: "1.4",
                      }}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </fieldset>

      {/* Retro Detail: A fake status indicator for the log file */}
      <div
        className="field-row"
        style={{ marginTop: "10px", justifyContent: "flex-end" }}
      >
        <label>File_Encoding: UTF-8</label>
        <label>Access: Read-Only</label>
      </div>
    </div>
  );
}
