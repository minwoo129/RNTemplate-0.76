import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {BasicScreenTemplateProps} from './types';
import HeaderTemplates from '@templates/HeaderTemplates';

const BasicScreen: FC<BasicScreenTemplateProps> = ({
  screenStyle,
  screenProps,
  bodyStyle,
  bodyProps,
  headerComponent,
  headerProps,
  children,
}) => {
  return (
    <SafeAreaView style={[styles.container, screenStyle]} {...screenProps}>
      {headerComponent ?? <HeaderTemplates.Basic title="" {...headerProps} />}
      <View style={bodyStyle} {...bodyProps}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(BasicScreen);
