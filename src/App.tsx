import { useState } from "react";
import ChatbotInput from "./components/Chatbot/ChatbotInput";
import ChatMessage from "./components/Chatbot/ChatMessage";
import type { ChatMessageType } from "./utilities/dataTypes/ChatMessageType";

function App() {
  const [chatMessages, setChatMessages] = useState<ChatMessageType[]>([]);

  const sendChat = (message: string) => {
    console.log(`Chat sent! = ${message}`);
    const chatID = chatMessages.length;
    setChatMessages([
      ...chatMessages,
      { message, key: chatID, sender: "user" },
    ]);
  };

  return (
    <>
      <h1>Chatty Chatbot</h1>
      <div>
        <p className="read-the-docs">
          Here we will learn to chat with a chatty chat bot!
        </p>
      </div>
      <ChatbotInput sendChat={sendChat} />
      {chatMessages.map((message: ChatMessageType, index: number) => {
        return <ChatMessage chatMessage={message} key={index} />;
      })}
    </>
  );
}

export default App;
