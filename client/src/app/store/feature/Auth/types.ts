import { PostAuthRegisterReq } from 'app/api/model/post/postAuthRegister';
import { PostAuthLoginReq } from 'app/api/model/post/postAuthLogin';

export interface AuthState {
  user: {
    _id?: string;
    username: string;
    email: string;
    token: string;
    isAvatarImageSet?: boolean;
    avatarImage?: string;
  }
}

/** Actions */
export const REGISTER__USERS = 'REGISTER__USERS';
export const LOGIN__USERS = 'LOGIN__USERS';
export const SAVE__USERS = 'SAVE__USERS';

export interface ExecuteRegisterAction {
  type: typeof REGISTER__USERS;
  payload: {
    args: PostAuthRegisterReq
  }
}

export interface ExecuteLoginAction {
  type: typeof LOGIN__USERS;
  payload: {
    args: PostAuthLoginReq
  }
}

export interface ExecuteSaveAction {
  type: typeof SAVE__USERS;
  payload: {
    args: AuthState
  }
}

export type AuthActions = ExecuteRegisterAction | ExecuteLoginAction | ExecuteSaveAction;