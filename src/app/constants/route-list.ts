import { RouteProps } from 'react-router-dom';

import { Welcome } from 'components/Welcome';

export const routeList: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Welcome,
  },
];
