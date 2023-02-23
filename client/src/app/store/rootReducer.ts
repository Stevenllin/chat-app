import { combineReducers } from 'redux';
import authReducer from './feature/Auth/reducer';

const rootReducer = combineReducers({
  features: combineReducers({
    auth: authReducer
  })
})

export default rootReducer;
