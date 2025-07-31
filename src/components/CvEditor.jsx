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
  accentColor,
  setAccentColor,
  setFont,
}) {
  return (
    <div className="cv_editor">
      {/* General Information Section */}
      <Section
        heading="General Information"
        fields={generalInfoFields}
        cvData={cvData}
        onChange={onChange}
        sectionName="generalInfo"
      />
      {/* Photo Input tag */}
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

      {/* Education Section  */}
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
      {/* Add and Delete Education Section buttons */}
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

      {/* WorkExperience Section */}
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
      {/* Add and Delete WorkExperience Section buttons */}
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

      {/* Additional functionality buttons */}
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

      {/* Color Input tag */}
      <label
        htmlFor="accent-color"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          background: "#fff",
          color: "black",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
          margin: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        }}
      >
        Accent Color
        <input
          type="color"
          id="accent-color"
          value={accentColor}
          onChange={(e) => setAccentColor(e.target.value)}
          style={{
            marginLeft: "10px",
            width: "32px",
            height: "32px",
            border: "none",
            background: "none",
            cursor: "pointer",
            verticalAlign: "middle",
          }}
        />
      </label>

      {/* Change font buttons */}
      <div
        className="font-btns"
        style={{
          display: "flex",
          marginLeft: "10px",
          marginTop: "8px",
          marginBottom: "8px",
          gap: "6px",
        }}
      >
        <h4>Fonts</h4>
        <Button
          onClickHandler={() => setFont("Noto Sans, sans-serif")}
          text={"Sans"}
        />
        <Button
          onClickHandler={() => setFont("monospace")}
          text={"monospace"}
        />
      </div>
    </div>
  );
}
