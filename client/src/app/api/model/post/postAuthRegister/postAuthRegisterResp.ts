export interface PostAuthRegisterResp {
  status: boolean;
  data: User;
}

export interface User {
  username: string;
  email: string;
  password: string;
  token: string;
}
