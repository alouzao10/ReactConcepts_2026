import { useState } from "react";

interface PassedProps {
  sendChat: (chatText: string) => void;
}

function ChatbotInput(props: PassedProps) {
  const [chatText, setChatText] = useState("");

  const enterInput = (key: string) => {
    if (key === "Enter" && chatText) {
      props.sendChat(chatText);
    }
  };
  return (
    <div>
      <h1>Let's Chat!</h1>
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
        size={40}
      />
      <button onClick={() => props.sendChat(chatText)}>Send</button>
    </div>
  );
}

export default ChatbotInput;
