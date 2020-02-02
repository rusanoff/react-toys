import './Welcome.scss';

import React, { FC } from 'react';
import { FullScreen } from 'components/FullScreen';

export const Welcome: FC = (): JSX.Element => {
  return (
    <FullScreen>
      <header className="header">
        <h1 className="header-title">Welcome!</h1>
        <h2 className="header-subtitle">
          It is application for storing React.js tips, tricks, examples, features and self-study
          materials
        </h2>
      </header>
    </FullScreen>
  );
};
