import {TotalNavigationTrees, TotalNavigatorRouteTrees} from '@navigation';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

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
