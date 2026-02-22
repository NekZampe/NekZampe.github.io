import { useTranslation } from "react-i18next";

export function AboutMe() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        height: "100%",
        overflow: "hidden",
        padding: "5px",
      }}
    >
      {/* LEFT SIDEBAR: Identity & Contact */}
      <aside
        style={{
          width: "260px",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          height: "100%",
        }}
      >
        {/* Profile Identity Card */}
        <div
          className="sunken-panel"
          style={{
            backgroundColor: "#fff",
            padding: "10px",
            display: "flex",
            flexDirection: "column", // Stacks image and name
            alignItems: "center",
            gap: "10px",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <img
            src="/portfolioPic.jpg"
            alt="Nektarios"
            style={{
              width: "100%",
              maxHeight: "220px", // Capped to leave room for the name
              display: "block",
              objectFit: "cover",
              imageRendering: "pixelated",
              border: "1px solid #808080",
            }}
          />
          {/* USER NAME: Underneath image */}
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.1rem",
              textAlign: "center",
              color: "#000",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: "12px",
            }}
          >
            Nektarios Zampetoulakis
          </div>
        </div>

        <fieldset
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: "0",
          }}
        >
          <legend style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
            {t("about.contact.legend")}
          </legend>
          {/* REMOVED height: "100%" here to prevent the container from forcing a stretch */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <div className="field-row-stacked">
              <label style={{ fontSize: "0.85rem" }}>
                {t("about.contact.email_label")}:
              </label>
              <input
                type="text"
                readOnly
                value="nektarios.zampet@gmail.com"
                style={{
                  width: "100%",
                  fontSize: "0.85rem",
                  backgroundColor: "#dfdfdf",
                }}
              />
            </div>

            <button
              onClick={() =>
                window.open("https://github.com/NekZampe", "_blank")
              }
              style={{ width: "100%" }}
            >
              {t("about.contact.github_btn")}
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://linkedin.com/in/nektarios-zampetoulakis",
                  "_blank",
                )
              }
              style={{ width: "100%" }}
            >
              {t("about.contact.linkedin_btn")}
            </button>

            {/* REMOVED the wrapper div and marginTop: "auto" */}
            <button
              onClick={() =>
                window.open("/Nektarios_Zampetoulakis_CV.pdf", "_blank")
              }
              style={{
                width: "100%",
                fontWeight: "bold",
                backgroundColor: "#e0e0e0",
                padding: "5px 0",
                marginTop: "5px",
              }}
            >
              {t("about.contact.cv_btn")}
            </button>
          </div>
        </fieldset>
      </aside>

      {/* RIGHT CONTENT: Bio (Top) and Specs (Bottom) */}
      <main
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          overflow: "hidden",
        }}
      >
        <section>
          <h2
            style={{
              margin: "0 0 10px 0",
              color: "#000080",
              fontSize: "1.4rem",
            }}
          >
            {t("about.heading")}
          </h2>
          <div
            className="sunken-panel"
            style={{ backgroundColor: "white", padding: "15px" }}
          >
            <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.5" }}>
              {t("about.bio")}
            </p>
          </div>
        </section>

        <div style={{ display: "flex", gap: "20px", marginTop: "auto" }}>
          {/* Education */}
          <fieldset style={{ flex: 1 }}>
            <legend style={{ fontSize: "1rem", fontWeight: "bold" }}>
              {t("about.education.title")}
            </legend>
            <div style={{ marginBottom: "12px" }}>
              <strong
                style={{
                  display: "block",
                  color: "#000080",
                  fontSize: "0.95rem",
                }}
              >
                {t("about.education.school")}
              </strong>
              <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                {t("about.education.degree")}
              </span>
              <div style={{ color: "#808080", fontSize: "0.85rem" }}>
                {t("about.education.graduation")}
              </div>
            </div>
            <hr />
            <div style={{ marginTop: "10px" }}>
              <strong style={{ display: "block", fontSize: "0.9rem" }}>
                {t("about.education.gdsc_role")}
              </strong>
              <p
                style={{
                  margin: "5px 0 0 0",
                  fontSize: "13px",
                  lineHeight: "1.4",
                }}
              >
                {t("about.education.gdsc_desc")}
              </p>
            </div>
          </fieldset>

          {/* Technical Specifications */}
          <fieldset style={{ flex: 1 }}>
            <legend style={{ fontSize: "1rem", fontWeight: "bold" }}>
              {t("about.skills.title")}
            </legend>
            <ul
              style={{
                margin: 0,
                padding: "0 0 0 18px",
                lineHeight: "1.6",
                fontSize: "14px",
              }}
            >
              <li>{t("about.skills.languages")}</li>
              <li>{t("about.skills.frameworks")}</li>
              <li>{t("about.skills.tools")}</li>
              <li>{t("about.skills.spoken")}</li>
            </ul>
          </fieldset>
        </div>
      </main>
    </div>
  );
}
