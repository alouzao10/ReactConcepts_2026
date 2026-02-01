import { useState } from "react";

interface PassedProps {
  sendChat: (chatText: string) => void;
}

function ChatbotInput(props: PassedProps) {
  const [chatText, setChatText] = useState("");

  const enterInput = (key: string) => {
    if (key === "Enter" && chatText) {
      props.sendChat(chatText);
      setChatText("");
    }
  };

  const clickSend = () => {
    if (chatText) {
      props.sendChat(chatText);
      setChatText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={chatText}
        placeholder={"Enter your message here..."}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setChatText(e.target.value)
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          enterInput(e.key)
        }
        size={50}
      />
      <button onClick={clickSend}>Send</button>
    </div>
  );
}

export default ChatbotInput;
