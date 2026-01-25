export interface ChatMessageType {
  message: string;
  key: number;
  sender: "user" | "robot";
}
