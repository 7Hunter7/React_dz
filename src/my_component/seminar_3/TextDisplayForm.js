import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import "@fontsource/roboto/500.css";

function TextDisplayForm() {
  const [text, setText] = useState("");
  const [printText, setPrintText] = useState("");

  const handleText = (e) => {
    e.preventDefault();
    setPrintText(text);
    setText("");
  };

  return (
    <>
      <TextField
        onChange={(e) => setText(e.target.value)}
        fullWidth
        id="outlined-bsic"
        variant="outlined"
        label="Введите текст"
        value={text}
        style={{ margin: 20 }}
      />
      <Button
        onClick={handleText}
        variant="contained"
        style={{ marginBottom: 20 }}
      >
        Отобразить текст
      </Button>
      {printText && <Typography variant="h5">{printText}</Typography>}
    </>
  );
}

export default TextDisplayForm;
