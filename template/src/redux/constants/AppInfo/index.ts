import {initialStateType} from './types';

export const initialState: initialStateType = {
  /** 사용자 로그인 유무 */
  login: false,
  /** 앱 실행 후 초기화 완료여부 */
  init: false,
};
