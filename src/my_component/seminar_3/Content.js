import React from "react";

const Content = ({ theme }) => {
  const styles = {
    backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#333" : "#f0f0f0",
    margin: "20px",
    padding: "20px",
  };

  return (
    <div style={styles}>
      <p>This is the content area.</p>
    </div>
  );
};

export default Content;
