export interface ChatMessageType {
  message: string;
  key: string;
  sender: "user" | "robot";
}
