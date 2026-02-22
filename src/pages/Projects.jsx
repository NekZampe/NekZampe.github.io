import { useTranslation } from "react-i18next";
import { ProjectTree } from "../components/ProjectTree";

export function Projects() {
  const { t } = useTranslation();

  return (
    <fieldset
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        overflow: "hidden",
      }}
    >
      <legend>{t("projects")}</legend>
      <ProjectTree />
    </fieldset>
  );
}
