import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';
import Button from '@atoms/Button';
import {IC_BACK} from '@utils/icons';
import {ButtonProps} from '@atoms/Button/types';

interface BackArrowButtonProps extends Omit<ButtonProps, 'onPress'> {
  onPress: () => void;
}

const BackArrowButton: FC<BackArrowButtonProps> = ({onPress, ...props}) => {
  return (
    <Button onPress={onPress} {...props}>
      <Image source={IC_BACK} style={styles.image} />
    </Button>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
});

export default React.memo(BackArrowButton);
