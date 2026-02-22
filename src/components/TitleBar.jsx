import { useTranslation } from "react-i18next";

export function TitleBar() {
  const { i18n } = useTranslation();

  return (
    <div className="title-bar">
      <div className="title-bar-text">
        Nektarios_Portfolio.exe -{" "}
        {i18n.language === "en" ? "English" : "Français"}
      </div>

      <div
        className="title-bar-controls"
        style={{ display: "flex", gap: "2px", alignItems: "center" }}
      >
        {/* Language Toggles */}
        <div style={{ display: "flex", gap: "2px", marginRight: "10px" }}>
          <button
            style={{
              minWidth: "30px",
              padding: "1px 5px",
              fontSize: "12px",
              height: "20px",
            }}
            onClick={() => i18n.changeLanguage("en")}
            className={i18n.language === "en" ? "active" : ""}
          >
            EN
          </button>
          <button
            style={{
              minWidth: "30px",
              padding: "1px 5px",
              fontSize: "12px",
              height: "20px",
            }}
            onClick={() => i18n.changeLanguage("fr")}
            className={i18n.language === "fr" ? "active" : ""}
          >
            FR
          </button>
        </div>

        {/* Standard Window Controls */}
        <button aria-label="Minimize" />
        <button aria-label="Maximize" />
        <button aria-label="Close" />
      </div>
    </div>
  );
}
