import CvHeader from "./CvHeader";
import CvBody from "./CvBody";

export default function Cv({ cvData }) {
  return (
    <div style={{ marginTop: "10px", marginLeft: "30px" }}>
      <CvHeader cvData={cvData} />
      <CvBody cvData={cvData} />
    </div>
  );
}
