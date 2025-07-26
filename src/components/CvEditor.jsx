import "../styles/CvEditor.css";
import Section from "./Section";
import {
  generalInfoFields,
  educationFields,
  workExperienceFields,
} from "../fields";
import Button from "./ Button";

export default function CvEditor({
  cvData,
  onChange,
  onAddSection,
  onDeleteSection,
}) {
  return (
    <div className="cv_editor">
      <Section
        heading="General Information"
        fields={generalInfoFields}
        cvData={cvData}
        onChange={onChange}
        sectionName="generalInfo"
      />
      {cvData.education.map((edu, idx) => (
        <Section
          key={idx}
          heading={`Education #${idx + 1}`}
          fields={educationFields}
          cvData={cvData}
          onChange={onChange}
          sectionName="education"
          index={idx}
        />
      ))}
      <div
        className="buttons"
        style={{
          display: "flex",
          marginLeft: "10px",
          marginTop: "8px",
          gap: "6px",
        }}
      >
        <Button text={"Add"} onClickHandler={() => onAddSection("education")} />
        <Button
          text={"Delete"}
          onClickHandler={() => onDeleteSection("education")}
        />
      </div>

      {cvData.workExperience.map((work, idx) => (
        <Section
          key={idx}
          heading={`Work Experience #${idx + 1}`}
          fields={workExperienceFields}
          cvData={cvData}
          onChange={onChange}
          sectionName="workExperience"
          index={idx}
        />
      ))}
      <div
        className="buttons"
        style={{
          display: "flex",
          marginLeft: "10px",
          marginTop: "8px",
          marginBottom: "8px",
          gap: "6px",
        }}
      >
        <Button
          text={"Add"}
          onClickHandler={() => onAddSection("workExperience")}
        />
        <Button
          text={"Delete"}
          onClickHandler={() => onDeleteSection("workExperience")}
        />
      </div>
    </div>
  );
}
