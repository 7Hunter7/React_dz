import Message from "./messege";
import { messages } from "./data";

export default function MessageList() {
  return (
    <>
      {messages.map((message) => {
        <Message key={message.id} {...message} />;
      })}
    </>
  );
}
