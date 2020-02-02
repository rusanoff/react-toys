import 'assets/styles/index.scss';

import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from 'components/ErrorBoundary';
import { Routes } from './Routes';

export const App: FC = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ErrorBoundary>
  );
};
