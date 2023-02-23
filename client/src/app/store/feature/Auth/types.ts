import { PostAuthRegisterReq } from 'app/api/model/post/postAuthRegister';

export interface AuthState {}

/** Actions */
export const REGISTER__USERS = 'REGISTER__USERS';

export interface ExecuteRegisterAction {
  type: typeof REGISTER__USERS;
  payload: {
    args: PostAuthRegisterReq
  }
}

export type AuthActions = ExecuteRegisterAction;