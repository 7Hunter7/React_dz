import { useState } from "react";

function TextInput() {
  const [inputText, setInputText] = useState("");
  const [arr, setArr] = useState([]);

  function clickHandler() {
    if (!inputText.trim()) {
      return;
    }
    setArr([...arr, inputText]);
    setInputText("");
  }

  return (
    <div>
      <label htmlFor="input">Введите новое дело: </label>
      <input
        type="text"
        id="input"
        value={inputText}
        maxLength={20}
        onChange={(event) => setInputText(event.target.value)}
      ></input>
      <button onClick={clickHandler}>Click to add</button>
      <ol>
        {arr.map((item) => (
          <li key={arr.indexOff(item)}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default TodoAddtoList;
