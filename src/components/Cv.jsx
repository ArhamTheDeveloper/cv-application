import CvHeader from "./CvHeader";
import "../styles/Cv.css";
import CvBody from "./CvBody";

export default function Cv({ cvData }) {
  return (
    <div className="cv">
      <CvHeader cvData={cvData} />
      <CvBody cvData={cvData} />
    </div>
  );
}
