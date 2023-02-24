import { PostAuthRegisterReq } from 'app/api/model/post/postAuthRegister';
import { AuthState, AuthActions, REGISTER__USERS, SAVE__USERS } from './types';

export const executeRegisterAction = (args: PostAuthRegisterReq): AuthActions => ({
  type: REGISTER__USERS,
  payload: { args }
})

export const saveUserInformationAction = (args: AuthState): AuthActions => ({
  type: SAVE__USERS,
  payload: { args }
})
