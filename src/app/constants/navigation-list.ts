import navigationJSON from 'configs/navigation.config.json';
import { INavigationItem } from 'models/navigation.models';

const navigationMap: Record<string, INavigationItem> = navigationJSON;

export { navigationMap };
