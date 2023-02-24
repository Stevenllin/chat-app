import React from 'react';
import store from 'app/store';
import { routerHistory } from 'app/core/router/service';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={routerHistory}>
        <AppRoutes />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;