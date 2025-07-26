import { useState } from "react";
import "./App.css";
import Cv from "./components/Cv";
import CvEditor from "./components/CvEditor";
import Navbar from "./components/Navbar";

function App() {
  const [cvData, setCvData] = useState({
    generalInfo: {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    },
    education: [
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ],
    workExperience: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
  });

  const handleChange = (section, field, value, index = null) => {
    setCvData((prev) => {
      // If the section is an array (education, workExperience)
      if (Array.isArray(prev[section])) {
        // Make a copy of the array
        const updatedArray = [...prev[section]];
        // Update the specific item at the given index
        updatedArray[index] = {
          ...updatedArray[index],
          [field]: value,
        };
        // Return the new state with the updated array
        return {
          ...prev,
          [section]: updatedArray,
        };
      } else {
        // If the section is an object (generalInfo)
        return {
          ...prev,
          [section]: {
            ...prev[section],
            [field]: value,
          },
        };
      }
    });
  };

  const handleAddSection = (sectionName) => {
    setCvData((prev) => ({
      ...prev,
      [sectionName]: [
        ...prev[sectionName],
        { school: "", degree: "", startDate: "", endDate: "" },
      ],
    }));
  };

  const handleDeleteSection = (sectionName) => {
    setCvData((prev) => ({
      ...prev,
      [sectionName]:
        prev[sectionName].length > 1
          ? prev[sectionName].slice(0, -1)
          : prev[sectionName],
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="cv_parent">
        <Cv cvData={cvData} />
        <CvEditor
          cvData={cvData}
          onChange={handleChange}
          onAddSection={handleAddSection}
          onDeleteSection={handleDeleteSection}
        />
      </div>
    </div>
  );
}

export default App;
