function Box({ children }) {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "360px",
        margin: 10,
        padding: 10,
      }}
    >
      {children}
    </div>
  );
}

export default Box;
