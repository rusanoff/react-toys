import React, { FC } from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';

import { routeList } from 'configs/routeList';

export const Routes: FC = (): JSX.Element => {
  return (
    <Switch>
        {
          routeList.map((route: RouteProps, i: number): JSX.Element => {
            return (
              <Route key={i} {...route} />
            );
          })
        }
    </Switch>
  );
};
