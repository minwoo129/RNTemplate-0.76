import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {EmptyScreenTemplateProps} from './types';

const EmptyScreen: FC<EmptyScreenTemplateProps> = ({
  screenStyle,
  screenProps,
  children,
}) => {
  return (
    <SafeAreaView style={[styles.container, screenStyle]} {...screenProps}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(EmptyScreen);
