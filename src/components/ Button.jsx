export default function Button({ text, onClickHandler }) {
  return (
    <button
      style={{
        padding: "4px 10px",
        border: "none",
        borderRadius: "4px",
        outline: "none",
        cursor:"pointer"
      }}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
}
