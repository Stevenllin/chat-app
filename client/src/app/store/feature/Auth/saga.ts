import apiService from 'app/api/service/apiService';
import storageService from 'app/core/service/storageService';
import { StorageKeysEnum } from 'app/core/enum/storage';
import { takeEvery, all, call, put } from 'redux-saga/effects';
import { PostAuthRegisterResp } from 'app/api/model/post/postAuthRegister';
import { REGISTER__USERS, ExecuteRegisterAction } from './types';
import { saveUserInformationAction } from './action';

function * executeRegister (action: ExecuteRegisterAction) {
  const response: PostAuthRegisterResp = yield call(apiService.postAuthRegister, action.payload.args)
  if (!response.status) {
    console.log('status', response.status);
  } else {
    const request = {
      username: response.user.username,
      email: response.user.email,
      token: response.user.token
    }
    storageService.setItem(StorageKeysEnum.Authorization, JSON.stringify({
      user: request
    }));
    yield put(saveUserInformationAction({
      user: request
    }))
  }
}


export default function * watchAuthSaga () {
  yield all([
    takeEvery(REGISTER__USERS, executeRegister),
  ]);
}
