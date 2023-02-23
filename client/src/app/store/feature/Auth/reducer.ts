import { Reducer } from 'redux';
import { AuthState, AuthActions } from './types';

const initialState: AuthState = {};

const authReducer: Reducer<AuthState, AuthActions> = (state = initialState, action): AuthState => {
  switch (action.type) {
    default:
      return state;
  }
}

export default authReducer;
