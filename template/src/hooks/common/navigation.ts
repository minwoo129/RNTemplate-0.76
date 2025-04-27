import {
  MainStackNavigation,
  MainStackPageParams,
} from '@pages/navigation/MainStackNavigator/types';
import {
  MainTabNavigation,
  MainTabPageParams,
} from '@pages/navigation/MainTabNavigator/types';
import {
  RootStackNavigation,
  RootStackPageParams,
} from '@pages/navigation/RootStackNavigator/types';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type TotalNavigatorRouteTrees = {
  RootStackNavigator: RootStackPageParams;
  MainStackNavigator: MainStackPageParams;
  MainTabNavigator: MainTabPageParams;
};

type TotalNavigationTrees = {
  RootStackNavigator: RootStackNavigation;
  MainStackNavigator: MainStackNavigation;
  MainTabNavigator: MainTabNavigation;
};

export const useAppRoute: <
  T extends keyof TotalNavigatorRouteTrees,
  S extends keyof TotalNavigatorRouteTrees[T],
>(
  nav: T,
  page: S,
) => RouteProp<TotalNavigatorRouteTrees[T], S> = useRoute;

export const useAppNaviagtion: <T extends keyof TotalNavigationTrees>(
  nav: T,
) => TotalNavigationTrees[T] = useNavigation;
