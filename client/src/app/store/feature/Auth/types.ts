import { PostAuthRegisterReq } from 'app/api/model/post/postAuthRegister';

export interface AuthState {
  user: {
    username: string;
    email: string;
    token: string;
  }
}

/** Actions */
export const REGISTER__USERS = 'REGISTER__USERS';
export const SAVE__USERS = 'SAVE__USERS';

export interface ExecuteRegisterAction {
  type: typeof REGISTER__USERS;
  payload: {
    args: PostAuthRegisterReq
  }
}

export interface ExecuteSaveAction {
  type: typeof SAVE__USERS;
  payload: {
    args: AuthState
  }
}

export type AuthActions = ExecuteRegisterAction | ExecuteSaveAction;