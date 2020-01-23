import React, { FC } from 'react';

export const FullScreen: FC = ({children}): JSX.Element => {
  return (
    <section className="wrapper">
      <div className="content">
        {children}
      </div>
    </section>
  );
};
