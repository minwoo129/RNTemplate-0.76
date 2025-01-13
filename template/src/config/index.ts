import {HOST, PORT, SERVERTYPE} from '@env';
import {Dimensions} from 'react-native';

const config = {
  api: {
    host: HOST,
    port: PORT,
  },
};

let PATH = config.api.host;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

if (config.api.port) {
  PATH = `${PATH}:${config.api.port}`;
}

export const APP_SIZE_INFO = {
  /** 화면 가로 길이 */
  WINDOW_WIDTH,
  /** 화면 세로 길이 */
  WINDOW_HEIGHT,
};

export const API_INFO = {
  /** 내부 API 호출 공통경로 */
  API_PATH: PATH,
  /**
   * 서버 타입
   * - development: 개발서버
   * - staging: 스테이징서버
   * - production: 운영서버
   */
  SERVERTYPE,
};
