import { PostAuthRegisterReq } from 'app/api/model/post/postAuthRegister';
import { AuthActions, REGISTER__USERS } from './types';

export const executeRegisterAction = (args: PostAuthRegisterReq): AuthActions => ({
  type: REGISTER__USERS,
  payload: { args }
})
