/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Navigation from './Navigation/navigation';

AppRegistry.registerComponent(appName, () => Navigation);
