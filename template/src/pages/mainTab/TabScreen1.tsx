import ScreenTemplates from '@components/templates/ScreenTemplates';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TabScreen1 = () => {
  return (
    <ScreenTemplates.Empty>
      <Text>TabScreen1</Text>
    </ScreenTemplates.Empty>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
});

export default React.memo(TabScreen1);
