import React from 'react';
import { ROUTES } from './core/router/path';
import { BrowserRouter, Switch } from 'react-router-dom';
import RouterRoute from './common/components/Router/RouterRoute';
import useAuthorizationGuard from 'app/core/router/guards/useAuthorizationGuard';
import useUnauthorizationGuard from 'app/core/router/guards/useUnauthorizationGuard';
import LazySpinner from './common/components/Spinner/LazySpinner';
import RouterScrollToTop from 'app/common/components/Router/RouterScrollToTop';

const AppRoutes: React.FC = () => (
  <React.Suspense fallback={<LazySpinner />}>
    <BrowserRouter>
      <RouterScrollToTop />
      <Switch>
        <RouterRoute
          path={ROUTES.AUTH}
          component={React.lazy(() => import('./feature/Auth'))}
          activate={[useUnauthorizationGuard]}
        />
        <RouterRoute
          path={ROUTES.FEATURES}
          component={React.lazy(() => import('./feature/Feature'))}
          activate={[useAuthorizationGuard]}
        />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);

export default AppRoutes;
