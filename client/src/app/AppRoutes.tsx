import React from 'react';
import { ROUTES } from './core/router/path';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LazySpinner from './common/components/Spinner/LazySpinner';
import RouterScrollToTop from 'app/common/components/Router/RouterScrollToTop';

const AppRoutes: React.FC = () => (
  <React.Suspense fallback={<LazySpinner />}>
    <BrowserRouter>
      <RouterScrollToTop />
      <Switch>
        <Route
          path={ROUTES.FEATURES}
          component={React.lazy(() => import('./feature/Feature'))}
        />
        <Route
          path={ROUTES.AUTH}
          component={React.lazy(() => import('./feature/Auth'))}
        />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);

export default AppRoutes;
