import BackArrowButton from 'src/components/common/BackArrowButton';
import HeaderTitle from 'src/components/common/HeaderTitle';
import {ComponentProps} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface BasicHeaderTemplateProps {
  /** 헤더 스타일 */
  headerCustomStyle?: StyleProp<ViewStyle>;
  /**
   * 타이틀 텍스트 props
   * - children은 title로 고정
   */
  titleTxtProps?: Omit<ComponentProps<typeof HeaderTitle>, 'children'>;
  /** 타이틀 */
  title: string;
}

export interface BasicWithBackHeaderTemplateProps
  extends BasicHeaderTemplateProps {
  /**
   * 뒤로가기 버튼 props
   * - onPress는 onPressBack으로 고정
   */
  backButtonProps?: Omit<ComponentProps<typeof BackArrowButton>, 'onPress'>;
  /** 뒤로가기 버튼 클릭 시 */
  onPressBack: () => void;
}
