import BasicHeader from './BasicHeader';
import BasicWithBackHeader from './BasicWithBackHeader';

const HeaderTemplates = {
  /**
   * 기본 헤더 템플릿
   * - 제목만 표시
   */
  Basic: BasicHeader,
  /**
   * 뒤로가기 버튼이 포함된 헤더 템플릿
   * - 제목과 뒤로가기 버튼 표시
   */
  BasicWithBack: BasicWithBackHeader,
};

export default HeaderTemplates;
