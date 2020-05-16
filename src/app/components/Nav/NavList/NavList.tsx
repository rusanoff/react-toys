import './NavList.scss';

import React, { FC, SyntheticEvent, useState } from 'react';

import { INavigationItem } from 'models/navigation.models';
import { NavItem } from 'components/Nav/NavItem';

type NavigationMap = Record<string, INavigationItem[]>;

interface INavListProps {
  items: INavigationItem[];
}

// export const NavList: FC<INavListProps> = ({ items }): JSX.Element => {
//   const [visibleNav, setVisibleNav] = useState<string[]>([]);
//
//   const getNavItemsMap = (list: INavigationItem[]): NavigationMap => {
//     let visibleNavIndex = 0;
//     const data: NavigationMap = {};
//
//     const findAllChildren = (elementsWithChildren: INavigationItem[]): NavigationMap => {
//       const children = elementsWithChildren.find((item: INavigationItem) => {
//         return item.key === visibleNav[visibleNavIndex];
//       })?.children;
//
//       if (children) {
//         data[visibleNav[visibleNavIndex]] = children;
//         visibleNavIndex++;
//
//         findAllChildren(children);
//       }
//
//       return data;
//     };
//
//     return findAllChildren(list);
//   };
//
//   const handleClick = (item: INavigationItem) => {
//     return (e: SyntheticEvent<HTMLLIElement>) => {
//       e.stopPropagation();
//
//       if (visibleNav.includes(item.key)) {
//         return;
//       }
//
//       const keyItems = item.key.split('.');
//
//       if (keyItems.length === 1) {
//         setVisibleNav([item.key]);
//
//         return;
//       }
//
//       const keys: string[] = [];
//
//       for (let i = 0; i < keyItems.length; i++) {
//         let key = '';
//
//         for (let j = 0; j < keyItems.length - i; j++) {
//           key += key ? `.${keyItems[j]}` : keyItems[j];
//         }
//
//         keys.push(key);
//       }
//
//       keys.reverse();
//
//       setVisibleNav(keys);
//     };
//   };
//
//   const renderNavItems = (elements: INavigationItem[]): JSX.Element[] => {
//     return elements.map((item: INavigationItem): JSX.Element => {
//       // eslint-disable-next-line no-undefined
//       const onClickProp = item.children?.length ? handleClick(item) : undefined;
//       const isItemActive = visibleNav.includes(item.key);
//
//       return (
//         <NavItem key={item.key} onClick={onClickProp} isActive={isItemActive}>
//           { item.name }
//         </NavItem>
//       );
//     });
//   };
//
//   const renderLists = (): JSX.Element[] => {
//     const navItemsMap = getNavItemsMap(items);
//
//     return Object.keys(navItemsMap).map((navigationItemKey) => {
//       return (
//         <ul key={navigationItemKey} className="navigation-list">
//           { renderNavItems(navItemsMap[navigationItemKey]) }
//         </ul>
//       );
//     });
//   };
//
//   return (
//     <>
//       <ul className="navigation-list">
//         { renderNavItems(items) }
//       </ul>
//       { renderLists() }
//     </>
//   );
// };

interface INavigationItemsMap {
  key: string;
  items: INavigationItem[];
}

const NavList: FC<INavListProps> = ({ items }): JSX.Element => {
  const [activeNavKeys, setActiveNavKeys] = useState<string[]>([]);
  const [childNavLists, setChildNavLists] = useState<INavigationItemsMap[]>([]);

  const handleNavItemClick = (item: INavigationItem) => {
    return (e: SyntheticEvent<HTMLLIElement>) => {
      e.stopPropagation();

      if (activeNavKeys.includes(item.key)) {
        return;
      }

      const keyItems = item.key.split('.');
      const keys: string[] = [];

      for (let i = 0; i < keyItems.length; i++) {
        let key = '';

        for (let j = 0; j < keyItems.length - i; j++) {
          key += key ? `.${keyItems[j]}` : keyItems[j];
        }

        keys.push(key);
      }

      keys.reverse();

      setActiveNavKeys(keys);

      console.log(keys);

      if (item.children?.length) {
        const childNavListsByActiveKeys: INavigationItemsMap[] = [];

        const findAllChildren = (navItemChildren: INavigationItem[], key: string, parentKey: string) => {

          if (navItemChildren.length) {
            const neededItem = navItemChildren.find((childNavItem: INavigationItem) => {
              return childNavItem.key === key;
            });

            if (neededItem) {
              childNavListsByActiveKeys.push({
                key: neededItem.key,
                items: neededItem.children || [],
              });
            } else {
              for (const childNavItem of navItemChildren) {
                findAllChildren(childNavItem.children || [], key);
              }
            }
          }

          return childNavListsByActiveKeys;

          // if (navItem.key === key) {
          //   const navListItemsMap = {
          //     key,
          //     items: navItem.children || [],
          //   };
          //
          //   childNavListsByActiveKeys.push(navListItemsMap);
          // } else if (navItem.children?.length) {
          //   const neededItem = navItem.children.find((childNavItem: INavigationItem) => {
          //     return childNavItem.key === key;
          //   });
          //
          //   if (neededItem) {
          //     findAllChildren(neededItem, key);
          //   }
          // }
        };

        const mainActiveItem = items.find((navItem: INavigationItem) => {
          return navItem.key === keys[0];
        });

        if (mainActiveItem) {
          childNavListsByActiveKeys.push({
            key: mainActiveItem.key,
            items: mainActiveItem.children || [],
          });

          keys.forEach((key, i) => {
            if (i) {
              findAllChildren(items, key, keys[i - 1]);
            } else {
              findAllChildren(items, key, keys[i - 1]);
            }
          });

          console.log(childNavListsByActiveKeys);

          setChildNavLists(childNavListsByActiveKeys);
        }
      }
    };
  };

  const renderNavLisItems = (navItems: INavigationItem[]): JSX.Element[] => {
    return navItems.map((item: INavigationItem) => {
      const isItemActive = activeNavKeys.includes(item.key);

      return (
        <NavItem key={item.key} onClick={handleNavItemClick(item)} isActive={isItemActive}>
          { item.name }
        </NavItem>
      );
    });
  };

  const renderChildLists = (): JSX.Element[] => {
    return childNavLists.map(({ key, items: childNavList }) => {
      return (
        <ul key={key} className="navigation-list">
          { renderNavLisItems(childNavList) }
        </ul>
      );
    });
  };

  return (
    <>
      <ul className="navigation-list">
        { renderNavLisItems(items) }
      </ul>
      { renderChildLists() }
    </>
  );
};

export {
  NavList,
  INavListProps,
};
