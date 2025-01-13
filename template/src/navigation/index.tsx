import {
  MainStackNavigation,
  MainStackPageParams,
} from './navigator/MainStackNavigator/types';
import {
  MainTabNavigation,
  MainTabPageParams,
} from './navigator/MainTabNavigator/types';
import {
  RootStackNavigation,
  RootStackPageParams,
} from './navigator/RootStackNavigator/types';

export {default as RootStackNavigator} from './navigator/RootStackNavigator';
export {default as MainStackNavigator} from './navigator/MainStackNavigator';
export {default as MainTabNavigator} from './navigator/MainTabNavigator';

export type {
  RootStackNavigation,
  RootStackNavigatorProps,
  RootStackPageParams,
  RootStackPages,
  RootStackRouteProp,
} from './navigator/RootStackNavigator/types';
export type {
  MainStackNavigation,
  MainStackNavigatorProps,
  MainStackPageParams,
  MainStackPages,
  MainStackRouteProp,
} from './navigator/MainStackNavigator/types';
export type {
  MainTabNavigation,
  MainTabNavigatorProps,
  MainTabPages,
  MainTabRouteProp,
} from './navigator/MainTabNavigator/types';

export type TotalNavigatorRouteTrees = {
  RootStackNavigator: RootStackPageParams;
  MainStackNavigator: MainStackPageParams;
  MainTabNavigator: MainTabPageParams;
};

export type TotalNavigationTrees = {
  RootStackNavigator: RootStackNavigation;
  MainStackNavigator: MainStackNavigation;
  MainTabNavigator: MainTabNavigation;
};
