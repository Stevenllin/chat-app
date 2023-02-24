import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { routerHistory } from 'app/core/router/service';
import authReducer from './feature/Auth/reducer';

const rootReducer = combineReducers({
  router: connectRouter(routerHistory),
  features: combineReducers({
    auth: authReducer
  })
})

export default rootReducer;
