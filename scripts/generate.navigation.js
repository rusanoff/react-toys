import fs from 'fs';
import path from 'path';

const NAVIGATION_CONFIG_PATH = path.resolve(__dirname, '..', 'configs', 'navigation.config.json');
const NAVIGATION_LIST_PATH = path.resolve(__dirname, '..', 'src', 'app', 'constants', 'navigationList.ts');

fs.readFile(NAVIGATION_CONFIG_PATH, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    throw err;
  }

  const navigationJSON = JSON.parse(data);
  console.log(navigationJSON);
});
