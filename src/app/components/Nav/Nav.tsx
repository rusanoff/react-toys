import './Nav.scss';
import React, { FC } from 'react';
import { navigationMap } from 'constants/navigation-list';
import { INavigationItem } from 'models/navigation.models';
import { NavList } from 'components/Nav/NavList';

const navItems: INavigationItem[] = Object.values(navigationMap);

export const Nav: FC = (): JSX.Element => {
  return (
    <nav className="navigation">
      <NavList items={navItems} />
    </nav>
  );
};
