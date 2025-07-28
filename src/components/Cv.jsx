import CvHeader from "./CvHeader";
import CvBody from "./CvBody";

export default function Cv({ cvData, accentColor, font }) {
  return (
    <div
      style={{
        marginTop: "10px",
        marginLeft: "30px",
        fontFamily: "Noto Sans, sans-serif",
      }}
    >
      <CvHeader cvData={cvData} accentColor={accentColor} font={font} />
      <CvBody cvData={cvData} accentColor={accentColor} font={font} />
    </div>
  );
}
