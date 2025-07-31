import { Mail, Phone, Locate } from "lucide-react";

export default function CvHeader({ cvData, accentColor, font }) {
  return (
    <div
      style={{
        backgroundColor: accentColor,
        width: "800px",
        minHeight: "150px",
        color: "white",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 0",
        fontFamily: font,
      }}
    >
      {/* Conditional checking for photo */}
      {cvData.generalInfo.photo && (
        <img
          src={cvData.generalInfo.photo}
          alt="Profile"
          style={{
            width: "70px",
            height: "70px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      )}
      <h1 style={{ marginBottom: "10px" }}>{cvData.generalInfo.fullName}</h1>

      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        {/* Conditional checking for email coz of icon */}
        {cvData.generalInfo.email && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
            }}
          >
            <Mail size={18} color="white" />
            <p>{cvData.generalInfo.email}</p>
          </div>
        )}
        {/* Conditional checking for phoneNumber coz of icon */}
        {cvData.generalInfo.phoneNumber && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
            }}
          >
            <Phone size={18} color="white" />
            <p>{cvData.generalInfo.phoneNumber}</p>
          </div>
        )}
        {/* Conditional checking for address coz of icon */}
        {cvData.generalInfo.address && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
            }}
          >
            <Locate size={18} color="white" />
            <p>{cvData.generalInfo.address}</p>
          </div>
        )}
      </div>
    </div>
  );
}
