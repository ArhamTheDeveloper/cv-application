import Input from "./Input";

export default function Section({
  fields,
  cvData,
  onChange,
  sectionName,
  index,
  heading,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column",gap:"6px",marginLeft:"10px" }}>
      {heading && <h2>{heading}</h2>}
      {fields.map((field) => {
        const value = Array.isArray(cvData[sectionName])
          ? cvData[sectionName][index][field.name]
          : cvData[sectionName][field.name];
        return (
          <Input
            name={field.name}
            id={field.id}
            key={field.id}
            placeholder={field.placeHolder}
            value={value}
            onChange={(e) =>
              onChange(sectionName, field.name, e.target.value, index)
            }
          />
        );
      })}
    </div>
  );
}
