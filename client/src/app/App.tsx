import React from 'react';
import store from 'app/store';
import { Router } from 'react-router';
import { routerHistory } from 'app/core/router/service';
import { Provider } from 'react-redux';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={routerHistory}>
        <AppRoutes />
      </Router>
    </Provider>
  );
}

export default App;