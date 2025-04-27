import React, {FC} from 'react';
import {Text} from 'react-native';
import {TextButtonProps} from './types';
import Button from 'src/components/common/Button';

const TextButton: FC<TextButtonProps> = ({
  children,
  textProps,
  ...buttonProps
}) => {
  return (
    <Button {...buttonProps}>
      <Text {...textProps}>{children}</Text>
    </Button>
  );
};

export default React.memo(TextButton);
