import CvHeader from "./CvHeader";
import CvBody from "./CvBody";

export default function Cv({ cvData, accentColor }) {
  return (
    <div style={{ marginTop: "10px", marginLeft: "30px" }}>
      <CvHeader cvData={cvData} accentColor={accentColor} />
      <CvBody cvData={cvData} accentColor={accentColor} />
    </div>
  );
}
