import {AsyncStorageKeys} from '@constants/StorageKeys';

export type StroageDataType<
  S extends AsyncStorageKeys,
  T extends StorageDataMap[S],
> = {
  key: S;
  data: T;
};
// ========================================================================
// 각 저장소 key 별 저장 데이터 구조 타입 정의
export type StorageDataMap = {
  appInfo: AppInfoStorageData;
};
// ========================================================================
export type AppInfoStorageData = {
  /** 앱 설치 후 첫 실행 여부 */
  isFirstStart: boolean;
};
