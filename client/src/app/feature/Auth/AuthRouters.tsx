import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from 'app/core/router/path';
import LazySpinner from 'app/common/components/Spinner/LazySpinner';

const AuthRouters: React.FC = () => {
  return (
    <React.Suspense fallback={<LazySpinner/>}>
      <Switch>
        <Route
          exact
          path={ROUTES.REGISTER}
          component={React.lazy(() => import('./Register'))}
        />
        <Route
          exact
          path={ROUTES.LOGIN}
          component={React.lazy(() => import('./Login'))}
        />
        <Redirect to={ROUTES.REGISTER} />
      </Switch>
    </React.Suspense>
  )
}

export default AuthRouters;