import apiService from 'app/api/service/apiService';
import { takeEvery, all, call } from 'redux-saga/effects';
import { PostAuthRegisterResp } from 'app/api/model/post/postAuthRegister';
import { REGISTER__USERS, ExecuteRegisterAction } from './types';

function * executeRegister (action: ExecuteRegisterAction) {
  const response: PostAuthRegisterResp = yield call(apiService.postAuthRegister, action.payload.args)
  if (!response.status) {
    console.log('status', response.status);
  } else {
    console.log('response', response);
    const authorization = response.user.token;
    console.log('authorization', authorization)
    console.log('success')
  }
}


export default function * watchAuthSaga () {
  yield all([
    takeEvery(REGISTER__USERS, executeRegister),
  ]);
}
