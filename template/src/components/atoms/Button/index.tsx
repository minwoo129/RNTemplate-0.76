import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {ButtonProps} from './types';

const Button: FC<ButtonProps> = ({visible = true, ...props}) => {
  if (!visible) {
    return null;
  }
  return <TouchableOpacity {...props} />;
};

export default React.memo(Button);
