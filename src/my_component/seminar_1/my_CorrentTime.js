import "./CorrentTime.css";

function CurrentTime() {
  const currentTime = new Date();
  return (
    <div class="container">
      <h2 class="title"> Время - деньги!</h2>
      <h3 class="time">
        Текущее время:
        {currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h3>
      <h3 class="data">
        Теукщая дата: {currentTime.toLocaleDateString("en-GB")}
      </h3>
    </div>
  );
}

export default CurrentTime;
