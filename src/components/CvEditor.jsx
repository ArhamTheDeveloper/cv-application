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
  onLoadExample,
  onHandleReset,
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
      <label
        htmlFor="photo-upload"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          background: "#ffffffff",
          color: "black",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
          margin: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        }}
      >
        Upload Photo
        <input
          id="photo-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                onChange("generalInfo", "photo", reader.result);
              };
              reader.readAsDataURL(file);
            }
          }}
        />
      </label>
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
      <div
        style={{
          display: "flex",
          marginLeft: "10px",
          marginTop: "8px",
          marginBottom: "8px",
          gap: "6px",
        }}
      >
        <Button text={"Load Example"} onClickHandler={onLoadExample} />
        <Button text={"Reset"} onClickHandler={onHandleReset} />
        <Button text={"Print CV"} onClickHandler={() => window.print()} />
      </div>
    </div>
  );
}
