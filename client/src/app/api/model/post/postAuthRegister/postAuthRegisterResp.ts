export interface PostAuthRegisterResp {
  status: boolean;
  user: User;
}

export interface User {
  username: string;
  email: string;
  password: string;
  token: string;
}
