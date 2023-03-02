export interface PostGetAllMessagesResp {
  projectedMessages: Messages[];
}

export interface Messages {
  fromSelf: boolean;
  message: string;
}
