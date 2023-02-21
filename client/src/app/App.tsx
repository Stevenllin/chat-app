import React from 'react';
import { Router } from 'react-router';
import { routerHistory } from 'app/core/router/service';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
  return (
    <Router history={routerHistory}>
      <AppRoutes />
    </Router>
  );
}

export default App;