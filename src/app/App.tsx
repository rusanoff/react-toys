import 'assets/styles/index.scss';

import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundry } from 'components/ErrorBoundry';
import { Routes } from './Routes';

export const App: FC = (): JSX.Element => {
  return (
      <ErrorBoundry>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ErrorBoundry>
  );
};
