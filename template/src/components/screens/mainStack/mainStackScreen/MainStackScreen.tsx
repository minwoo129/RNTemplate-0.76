import {useAppNaviagtion} from '@hooks/navigation';
import HeaderTemplates from '@templates/HeaderTemplates';
import ScreenTemplates from '@templates/ScreenTemplates';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(MainStackScreen);
