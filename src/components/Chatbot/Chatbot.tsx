import { useState } from "react";
import type { ChatMessageType } from "../../utilities/dataTypes/ChatMessageType";
import ChatbotInput from "./ChatbotInput";
import ChatMessage from "./ChatMessage";
import { ChatBot } from "../../utilities/chatbot/ChatBot";
function Chatbot() {
  const [chatMessages, setChatMessages] = useState<ChatMessageType[]>([
    {
      message: "Hello! I'm your chatbot. What do ya say we chat?",
      key: crypto.randomUUID(),
      sender: "robot",
    },
  ]);

  const sendChat = (message: string) => {
    console.log(`Chat sent! = ${message}`);

    const userMessage = {
      message,
      key: crypto.randomUUID(),
      sender: "user",
    } as ChatMessageType;

    const botResponse: ChatMessageType = ChatBot.getBotResponse(
      message,
    ) as ChatMessageType;
    setChatMessages([...chatMessages, userMessage, botResponse]);
  };

  return (
    <>
      <h1>Let's Chat!</h1>
      <ChatbotInput sendChat={sendChat} />
      {chatMessages.map((message: ChatMessageType) => {
        return <ChatMessage chatMessage={message} key={message.key} />;
      })}
    </>
  );
}

export default Chatbot;
