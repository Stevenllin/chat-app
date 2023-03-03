import React from 'react';
import { Route } from 'react-router-dom';
import { RouterRouteProps } from './types';

const RouterRoute: React.FC<RouterRouteProps> = ({ activate = [], ...restProps }) => {
  const isActivated = !activate.map((guardFunc) => guardFunc()).includes(false);
  return isActivated ? <Route {...restProps} /> : null;
};

export default RouterRoute;
