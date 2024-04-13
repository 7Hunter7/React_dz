import PropTypes from "prop-types";

function Message({ text, time, autor }) {
  return (
    <div>
      <h3>Автор №{autor}</h3>
      <p>Cообщение: {text}</p>
      <h4>Время: {time}</h4>
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  autor: PropTypes.number.isRequired,
};
export default Message;
