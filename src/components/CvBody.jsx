function hasNonEmpty(arr, keys) {
  return (arr || []).some((obj) => keys.some((key) => obj[key]));
}

export default function CvBody({ cvData }) {
  const showEducation = hasNonEmpty(cvData.education, [
    "school",
    "degree",
    "startDate",
    "endDate",
  ]);
  const showWork = hasNonEmpty(cvData.workExperience, [
    "company",
    "position",
    "startDate",
    "endDate",
    "description",
  ]);

  return (
    <div
      style={{
        backgroundColor: "#dbdbdb",
        width: "800px",
        minHeight: "650px",
        color: "black",
      }}
    >
      {showEducation && (
        <>
          <h2 style={{ paddingTop: "35px", textAlign: "center" }}>Education</h2>
          {cvData.education.map((edu, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                gap: "40px",
                marginLeft: "70px",
                marginTop: "20px",
              }}
            >
              <div className="date" style={{ display: "flex" }}>
                <p>{edu.startDate}</p>
                {edu.endDate && <p>&nbsp;- {edu.endDate}</p>}
              </div>
              <div className="education">
                <p style={{ fontWeight: "800" }}>{edu.school}</p>
                <p>{edu.degree}</p>
              </div>
            </div>
          ))}
        </>
      )}

      {showWork && (
        <>
          <h2 style={{ paddingTop: "35px", textAlign: "center" }}>
            Professional Experience
          </h2>
          {cvData.workExperience.map((work, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                gap: "40px",
                marginLeft: "70px",
                marginTop: "20px",
              }}
            >
              <div className="date" style={{ display: "flex" }}>
                <p>{work.startDate}</p>
                {work.endDate && <p>&nbsp;- {work.endDate}</p>}
              </div>
              <div className="work-experience">
                <p style={{ fontWeight: "800" }}>{work.company}</p>
                <p>{work.position}</p>
                <p
                  style={{
                    maxWidth: "500px",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                    whiteSpace: "normal",
                    marginTop: "5px",
                  }}
                >
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
