import { OrderedMap } from "immutable";
import type { ChatMessageType } from "../dataTypes/ChatMessageType";

export const ChatBot = {
  // Build the methods and data needed to interact with the chatbot here
  // Handle Responses and Requests to update the data as needed
  unsuccessfulResponse: {
    message: `Sorry, I didn't quite understand that. Currently, I only know how to flip a coin, roll a dice, or get today's date. Let me know how I can help!`,
    key: "unsuccessfulResponse",
    sender: "robot",
  } as ChatMessageType,

  emptyMessageResponse: {
    message: `Sorry, it looks like your message is empty. Please make sure you send a message and I will give you a response.`,
    key: "emptyMessageResponse",
    sender: "robot",
  } as ChatMessageType,

  greetings: ["hello", "hi", "hey", "greetings", "what's up"],
  goodByes: ["bye", "goodbye", "see you later", "farewell"],
  actions: ["flip a coin", "roll a dice", "what's the date", "today's date"],

  defaultMessage: OrderedMap<string, ChatMessageType>([
    [
      "welcomeMessage",
      {
        message:
          "Hello! I'm your friendly chatbot. How can I assist you today?",
        key: "welcomeMessage",
        sender: "robot",
      } as ChatMessageType,
    ],
    [
      "goodbyeMessage",
      {
        message:
          "Goodbye! It was nice chatting with you. Feel free to come back anytime!",
        key: "goodbyeMessage",
        sender: "robot",
      } as ChatMessageType,
    ],
  ]),

  getBotResponse: (userMessage: string): ChatMessageType => {
    const message = userMessage.toLowerCase().trim();

    if (message.length === 0) {
      return ChatBot.emptyMessageResponse;
    }
    // Check for messageing types for what matches with the user input
    if (ChatBot.greetings.includes(message)) {
      return ChatBot.defaultMessage.get("welcomeMessage")!;
    } else if (ChatBot.goodByes.includes(message)) {
      return ChatBot.defaultMessage.get("goodbyeMessage")!;
    }
    return ChatBot.unsuccessfulResponse;
  },
};
