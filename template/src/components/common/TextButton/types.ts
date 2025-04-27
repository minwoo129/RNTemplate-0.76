import Button from 'src/components/common/Button';
import {ComponentProps} from 'react';
import {Text} from 'react-native';

export interface TextButtonProps extends ComponentProps<typeof Button> {
  children: string;
  textProps?: Omit<ComponentProps<typeof Text>, 'children'>;
}
