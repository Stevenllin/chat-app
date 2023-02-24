export interface PostAuthLoginResp {
  status: boolean;
  user: User;
}

export interface User {
  username: string;
  email: string;
  password: string;
  token: string;
}
