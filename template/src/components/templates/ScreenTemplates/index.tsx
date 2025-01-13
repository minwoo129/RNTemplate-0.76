import BasicScreen from './BasicScreen';
import EmptyScreen from './EmptyScreen';

const ScreenTemplates = {
  /**
   * 빈 스크린 템플릿
   * - 헤더 없이 바디만 있는 빈 스크린 템플릿
   */
  Empty: EmptyScreen,
  /**
   * 기본 스크린 템플릿
   * - 헤더와 바디로 구성된 기본 스크린 템플릿
   * - 헤더의 타이틀은 기본적으로 출력되지 않도록 설계
   * - **headerProps** props를 통해 타이틀과 관련된 부가 설정 가능
   * - 헤더를 다른 컴포넌트로 변경하고 싶으면, **headerComponent** props를 통해 변경 가능
   *    - headerComponent props를 사용할 경우, headerProps props는 무시됨
   */
  Basic: BasicScreen,
};

export default ScreenTemplates;
