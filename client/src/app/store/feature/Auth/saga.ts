import apiService from 'app/api/service/apiService';
import storageService from 'app/core/service/storageService';
import { StorageKeysEnum } from 'app/core/enum/storage';
import { takeEvery, all, call, put } from 'redux-saga/effects';
import { PostAuthRegisterResp } from 'app/api/model/post/postAuthRegister';
import { PostAuthLoginResp } from 'app/api/model/post/postAuthLogin';
import { LOGIN__USERS, REGISTER__USERS, ExecuteRegisterAction, ExecuteLoginAction } from './types';
import { saveUserInformationAction } from './action';
import { sagaBoundary } from '../../service';

function * executeRegister (action: ExecuteRegisterAction) {
  const response: PostAuthRegisterResp = yield call(apiService.postAuthRegister, action.payload.args)
  if (!response.status) {
    console.log('status', response.status);
  } else {
    yield put(saveUserInformationAction({
      user: response.user
    }))
    storageService.setItem(StorageKeysEnum.Authorization, JSON.stringify({
      user: response.user
    }));
  }
}

function * executeLogin (action: ExecuteLoginAction) {
  const response: PostAuthLoginResp = yield call(apiService.postAuthLogin, action.payload.args)
  if (!response.status) {
    console.log('status', response.status);
  } else {
    const request = {
      _id: response.user._id,
      username: response.user.username,
      email: response.user.email,
      token: response.user.token,
      isAvatarImageSet: response.user.isAvatarImageSet,
      avatarImage: response.user.avatarImage
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
    takeEvery(REGISTER__USERS, sagaBoundary(executeRegister)),
    takeEvery(LOGIN__USERS, sagaBoundary(executeLogin))
  ]);
}
