import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export interface MainStackNavigatorProps {}

export type MainStackPageParams = {
  MainTabNavigator: undefined;
  MainStackScreen: undefined;
};

export type MainStackNavigation = StackNavigationProp<MainStackPageParams>;

export type MainStackPages = keyof MainStackPageParams;

export type MainStackRouteProp<T extends MainStackPages> = RouteProp<
  MainStackPageParams,
  T
>;
