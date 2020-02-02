import React, { FC } from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';

import { routeList } from 'configs/routeList';

export const Routes: FC = (): JSX.Element => {
  const routes = routeList.map((route: RouteProps, i: number): JSX.Element => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <Route key={i} {...route} />
    );
  });

  return (
    <Switch>
      { routes }
    </Switch>
  );
};
