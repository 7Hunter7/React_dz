import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { useState } from "react";

function TemperatureConverter() {
  const [сelsius, setСelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const measurement = () => {
    if (сelsius !== 0) {
      setСelsius(сelsius);
      setFahrenheit(Math.round((9 / 5) * сelsius + 32));
    }
    if (fahrenheit !== 0) {
      setFahrenheit(fahrenheit);
      setСelsius(Math.round((5 / 9) * (fahrenheit - 32)));
    }
  };

  function clear() {
    setСelsius(0);
    setFahrenheit(0);
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Конвертация температур</h2>
      <TextField
        onChange={(e) => setСelsius(e.target.value)}
        id="outlined-textarea"
        label="градусов Цельсия"
        multiline
        maxRows={1}
        style={{ margin: 20 }}
        value={сelsius}
        type="number"
      />
      <TextField
        onChange={(e) => setFahrenheit(e.target.value)}
        id="outlined-textarea"
        label="градусов Фаренгейта"
        multiline
        maxRows={1}
        style={{ margin: 20 }}
        value={fahrenheit}
        type="number"
      />
      <Button
        onClick={measurement}
        variant="contained"
        style={{ marginTop: 30 }}
      >
        Конвертировать
      </Button>
      <Button
        onClick={clear}
        variant="contained"
        style={{ marginTop: 30, marginLeft: 20 }}
      >
        Очистить поля
      </Button>
    </div>
  );
}

TemperatureConverter.propTypes = {
  сelsius: PropTypes.number.isRequired,
  fahrenheit: PropTypes.number.isRequired,
};

export default TemperatureConverter;
