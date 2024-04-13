import { useState } from "react";

function TextInput() {
  const [text, setText] = useState(" ");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Вы еще ничего не ввели"
        onKeyDown={handleChange}
        maxLength="10"
      ></input>
      <p>Вы ввели: {text}</p>
    </div>
  );
}

export default TextInput;
