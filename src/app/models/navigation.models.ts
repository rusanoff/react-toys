interface INavigationItem {
  key: string;
  name: string;
  children?: INavigationItem[];
  link?: string;
}

export {
  INavigationItem,
};
