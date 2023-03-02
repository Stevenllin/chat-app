export interface PostGetAllMessagesResp {
  messages: Messages[];
}

export interface Messages {
  fromSelf: string;
  message: string;
}
