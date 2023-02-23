import { all, spawn } from 'redux-saga/effects';
import watchAuthSaga from './feature/Auth/saga';

export default function * rootSaga () {
  yield all([
    spawn(watchAuthSaga)
  ]);
};
