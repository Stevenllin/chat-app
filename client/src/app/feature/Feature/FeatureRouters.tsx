import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from 'app/core/router';
import LazySpinner from 'app/common/components/Spinner/LazySpinner';

const FeaturesRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<LazySpinner/>}>
      <Switch>
        <Route
          exact
          path={ROUTES.Chatroom}
          component={React.lazy(() => import('./Chatroom'))}
        />
        <Redirect to={ROUTES.Chatroom} />
      </Switch>
    </React.Suspense>
  )
}
export default FeaturesRoutes;
