import userImg from "../../assets/user.jpg";
import robotImg from "../../assets/robot.jpg";
import type { ChatMessageType } from "../../utilities/dataTypes/ChatMessageType";

interface PassedProps {
  chatMessage: ChatMessageType;
}

export default function ChatMessage(props: PassedProps) {
  const { chatMessage } = props;
  return (
    <div id={`${chatMessage.key}-${chatMessage.sender}`}>
      {chatMessage.message}
      <img
        src={chatMessage.sender === "user" ? userImg : robotImg}
        alt={chatMessage.sender}
        width={50}
      />
    </div>
  );
}
