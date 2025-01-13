import {RootStackNavigator} from '@navigation';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React, {FC, useState} from 'react';

interface AppMainProps {}

const AppMain: FC<AppMainProps> = ({}) => {
  const navigationRef = useNavigationContainerRef();

  // 하위 Navigation 페이지 내에서 이전에 방문한 페이지
  // Analytics 로그 수집을 위해 사용
  const [prevPage, setPrevPage] = useState('');

  /**
   * Navigation 화면 전환 시 호출
   * - Google Analytics에서 Screen Tracking 기능 사용시 사용
   */
  const onNavigationStateChange = () => {
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

    if (currentRouteName && prevPage !== currentRouteName) {
      setPrevPage(currentRouteName);
      // 이 아래에 원하는 코드 작성
    }
  };
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={onNavigationStateChange}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default React.memo(AppMain);
