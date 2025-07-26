export default function ({ placeholder, name, id, value, onChange }) {
  return (
    <>
      <input
        style={{
          maxWidth: "200px",
          padding: "8px 6px",
          border: "2px solid black",
          outline: "none",
          borderRadius:"6px"
          
        }}
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
