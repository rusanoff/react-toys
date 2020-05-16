import './NavItem.scss';

import React, { FC, SyntheticEvent } from 'react';
import classNames from 'classnames';

import { handleMouseEnter, handleMouseLeave } from './NavItem.utils';

interface INavItemProps {
  onClick?: (e: SyntheticEvent<HTMLLIElement>) => void;
  isActive: boolean;
}

export const NavItem: FC<INavItemProps> = ({ children, onClick, isActive }): JSX.Element => {
  const classes = classNames({
    'navigation-item': true,
    'active': isActive,
  });

  return (
    <li
      className={classes}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{ children }</span>
    </li>
  );
};
