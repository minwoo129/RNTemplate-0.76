import React from 'react';
import {Text} from 'react-native';
import {useAppNaviagtion} from '@hooks/common/navigation';
import ScreenTemplates from '@components/templates/ScreenTemplates';
import HeaderTemplates from '@components/templates/HeaderTemplates';

const MainStackScreen = () => {
  const mainStackNavigation = useAppNaviagtion('MainStackNavigator');

  const onPressBack = () => {
    mainStackNavigation.goBack();
  };
  return (
    <ScreenTemplates.Basic
      headerComponent={
        <HeaderTemplates.BasicWithBack title="" onPressBack={onPressBack} />
      }>
      <Text>MainStackScreen</Text>
    </ScreenTemplates.Basic>
  );
};

export default React.memo(MainStackScreen);
