import "./CorrentTime.css";

const myname = "Ivan";
const date = "28/03/24";
const place = "Ivanovo";

function EventCard({ props }) {
  return (
    <div class="my__event_cart">
      <h2>Меня зовут {myname}</h2>
      <h3> Сегодня {date}</h3>
      <h3> Я нахожусь сейчас в {place}</h3>
    </div>
  );
}
export default EventCard;
