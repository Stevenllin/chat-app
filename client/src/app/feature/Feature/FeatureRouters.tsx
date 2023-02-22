import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from 'app/core/router/path';
import LazySpinner from 'app/common/components/Spinner/LazySpinner';

const FeaturesRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<LazySpinner/>}>
      <Switch>
        <Route
          exact
          path={ROUTES.FEATURES_CHATROOM}
          component={React.lazy(() => import('./Chatroom'))}
        />
        {/* <Redirect to={ROUTES.FEATURES_CHATROOM} /> */}
      </Switch>
    </React.Suspense>
  )
}
export default FeaturesRoutes;
