export interface MessageState {
  message: Message;
  users: string[];
  sender: string;
}

export interface Message {
  text: string;
}
