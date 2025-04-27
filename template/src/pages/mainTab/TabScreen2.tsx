import ScreenTemplates from '@components/templates/ScreenTemplates';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TabScreen2 = () => {
  return (
    <ScreenTemplates.Empty>
      <Text>TabScreen2</Text>
    </ScreenTemplates.Empty>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(TabScreen2);
