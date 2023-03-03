import { PostAuthRegisterReq } from 'app/api/model/post/postAuthRegister';
import { PostAuthLoginReq } from 'app/api/model/post/postAuthLogin';
import { AuthState, AuthActions, REGISTER__USERS, LOGIN__USERS, SAVE__USERS, UPDATE__USERS } from './types';

export const executeRegisterAction = (args: PostAuthRegisterReq): AuthActions => ({
  type: REGISTER__USERS,
  payload: { args }
})

export const executeLoginAction = (args: PostAuthLoginReq): AuthActions => ({
  type: LOGIN__USERS,
  payload: { args }
})

export const saveUserInformationAction = (args: AuthState): AuthActions => ({
  type: SAVE__USERS,
  payload: { args }
})

export const executeUpdateAvatarAction = (args: AuthState): AuthActions => ({
  type: UPDATE__USERS,
  payload: { args }
})
