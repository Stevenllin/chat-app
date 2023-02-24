import { Reducer } from 'redux';
import storageService from 'app/core/service/storageService';
import { StorageKeysEnum } from 'app/core/enum/storage';
import { AuthState, AuthActions } from './types';

const initialState: AuthState = JSON.parse(storageService.getItem(StorageKeysEnum.Authorization)) ?? {
  user: {
    username: null,
    email: null,
    token: null
  }
};

const authReducer: Reducer<AuthState, AuthActions> = (state = initialState, action): AuthState => {
  switch (action.type) {
    default:
      return state;
  }
}

export default authReducer;
