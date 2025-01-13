import React, {ComponentProps, FC} from 'react';
import {StyleSheet, Text} from 'react-native';

interface HeaderTitleProps
  extends Omit<ComponentProps<typeof Text>, 'children'> {
  children: string;
}

const HeaderTitle: FC<HeaderTitleProps> = ({children, style, ...props}) => {
  return (
    <Text style={style ?? styles.text} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    letterSpacing: -0.45,
    includeFontPadding: false,
    padding: 0,
  },
});

export default React.memo(HeaderTitle);
