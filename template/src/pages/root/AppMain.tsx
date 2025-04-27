import React, {FC} from 'react';
import useNavigationState from '@hooks/pages/root/useNavigationState';
import RootStackNavigator from '@pages/navigation/RootStackNavigator';
import {NavigationContainer} from '@react-navigation/native';

interface AppMainProps {}

const AppMain: FC<AppMainProps> = ({}) => {
  const {navigationRef, onNavigationStateChange} = useNavigationState();
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={onNavigationStateChange}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default React.memo(AppMain);
