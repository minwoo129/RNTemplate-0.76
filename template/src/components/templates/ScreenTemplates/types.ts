import HeaderTemplates from '../HeaderTemplates';
import {ComponentProps, ReactNode} from 'react';
import {SafeAreaView, StyleProp, View, ViewStyle} from 'react-native';

export interface EmptyScreenTemplateProps {
  /** 스크린 템플릿 컴포넌트 전체에 적용되는 스타일 */
  screenStyle?: StyleProp<ViewStyle>;
  /** 스크린 템플릿 컴포넌트를 구성하는 부모 Element Props */
  screenProps?: Omit<ComponentProps<typeof SafeAreaView>, 'style'>;
  children: ReactNode;
}

export interface BasicScreenTemplateProps extends EmptyScreenTemplateProps {
  /**
   * 헤더 컴포넌트
   * - default: HeaderTemplates.Basic
   */
  headerComponent?: ReactNode;
  /**
   * 헤더 컴포넌트에 전달되는 props
   * - default: HeaderTemplates.Basic 컴포넌트 props
   * - headerComponent가 존재할 경우 무시됨
   */
  headerProps?: ComponentProps<typeof HeaderTemplates.Basic>;
  /** 스크린 템플릿 컴포넌트 내 body 컴포넌트만 적용되는 스타일 */
  bodyStyle?: StyleProp<ViewStyle>;
  /** 스크린 템플릿 컴포넌트 내 body Element Props */
  bodyProps?: Omit<ComponentProps<typeof View>, 'style'>;
}
