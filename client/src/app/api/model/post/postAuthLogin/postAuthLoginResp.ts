export interface PostAuthLoginResp {
  status: boolean;
  user: User;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  token: string;
  isAvatarImageSet: boolean;
  avatarImage: string;
}
