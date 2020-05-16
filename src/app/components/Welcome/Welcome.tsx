import './Welcome.scss';

import React, { FC } from 'react';
import { FullScreen } from 'components/FullScreen';
import { Nav } from 'components/Nav/Nav';

export const Welcome: FC = (): JSX.Element => {
  return (
    <FullScreen>
      <section className="welcome-wrapper">
        <Nav />
      </section>
    </FullScreen>
  );
};
