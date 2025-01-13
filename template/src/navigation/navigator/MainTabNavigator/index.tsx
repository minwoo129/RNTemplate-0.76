import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {MainTabNavigatorProps, MainTabPageParams} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import TabScreen1 from '@screens/mainTab/tabScreen1/TabScreen1';
import TabScreen2 from '@screens/mainTab/tabScreen2/TabScreen2';

const Tab = createBottomTabNavigator<MainTabPageParams>();
const MainTabNavigator: FC<MainTabNavigatorProps> = ({}) => {
  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => (
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <Tab.Navigator
            initialRouteName="TabScreen1"
            screenOptions={{headerShown: false}}>
            <Tab.Screen name="TabScreen1" component={TabScreen1} />
            <Tab.Screen name="TabScreen2" component={TabScreen2} />
          </Tab.Navigator>
        </KeyboardAvoidingView>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default React.memo(MainTabNavigator);
