import {AsyncStorageKeys} from '@constants/StorageKeys';
import {StorageDataMap, StroageDataType} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * AsyncStorage 데이터 저장 함수
 */
export const setStorageData = async <
  S extends AsyncStorageKeys,
  T extends StorageDataMap[S],
>(
  storageData: StroageDataType<S, T>,
) => {
  const {key, data} = storageData;
  try {
    const jsonData = JSON.stringify(data);
    await AsyncStorage.mergeItem(key, jsonData);
  } catch (error) {
    throw error;
  }
};

/**
 * AsyncStorage 데이터 조회 함수
 */
export const getStorageData = async (key: AsyncStorageKeys) => {
  try {
    const jsonData = await AsyncStorage.getItem(key);
    if (!jsonData) {
      return null;
    }
    const data: StorageDataMap[typeof key] = JSON.parse(jsonData);
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * AsyncStorage 데이터 삭제 함수
 * @description 특정 저장공간만 삭제됨!
 * @param key 삭제할 데이터의 키
 */
export const clearEachStorageData = async (key: AsyncStorageKeys) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    throw error;
  }
};

/**
 * AsyncStorage 데이터 전체 삭제 함수
 */
export const clearAllStorageData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    throw error;
  }
};
