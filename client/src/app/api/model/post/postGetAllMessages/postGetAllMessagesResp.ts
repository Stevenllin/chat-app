export interface PostGetAllMessagesResp {
  projectedMessages: Messages[];
}

export interface Messages {
  fromSelf: string;
  message: string;
}
