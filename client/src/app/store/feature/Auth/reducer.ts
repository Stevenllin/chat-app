import { Reducer } from 'redux';
import storageService from 'app/core/service/storageService';
import { StorageKeysEnum } from 'app/core/enum/storage';
import { AuthState, AuthActions, SAVE__USERS, LOGIN__USERS } from './types';

const initialState: AuthState = JSON.parse(storageService.getItem(StorageKeysEnum.Authorization)) ?? {
  user: {
    username: null,
    email: null,
    token: null
  }
};

const authReducer: Reducer<AuthState, AuthActions> = (state = initialState, action): AuthState => {
  switch (action.type) {
    case SAVE__USERS: {
      return { ...action.payload.args  };
    }
    default:
      return state;
  }
}

export default authReducer;
