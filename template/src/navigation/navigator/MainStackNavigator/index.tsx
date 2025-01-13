import React, {FC} from 'react';
import {MainStackNavigatorProps, MainStackPageParams} from './types';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabNavigator from '../MainTabNavigator';
import MainStackScreen from '@screens/mainStack/mainStackScreen/MainStackScreen';

const Stack = createStackNavigator<MainStackPageParams>();
const MainStackNavigator: FC<MainStackNavigatorProps> = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="MainTabNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      <Stack.Screen name="MainStackScreen" component={MainStackScreen} />
    </Stack.Navigator>
  );
};

export default React.memo(MainStackNavigator);
