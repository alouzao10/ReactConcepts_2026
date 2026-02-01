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
      {chatMessage.sender === "user" && (
        <>
          {chatMessage.message}
          <img src={userImg} alt={chatMessage.sender} width={50} />
        </>
      )}
      {chatMessage.sender === "robot" && (
        <>
          <img src={robotImg} alt={chatMessage.sender} width={50} />
          {chatMessage.message}
        </>
      )}
    </div>
  );
}
