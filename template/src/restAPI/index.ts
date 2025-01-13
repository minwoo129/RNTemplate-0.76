import axios, {AxiosRequestConfig} from 'axios';
import {
  invokeAPIArgs,
  invokeAPICommonArgs,
  invokeExternalAPIArgs,
  invokeExternalFileUploadArgs,
  invokeFileUploadArgs,
} from './types';
import {convertFormDataWhenFileUpload} from './convert';
import {API_INFO} from '@config';

const REQUEST_TIMEOUT = 10 * 1000;
const {API_PATH} = API_INFO;

export const setHeaderToken = (access_token: string) => {
  axios.defaults.headers.common.Authorization = `bearer ${access_token}`;
};

export const clearToken = () => {
  delete axios.defaults.headers.common.Authorization;
};

/**
 * rest API 요청 전송 함수(내부 호스트 전용)
 *
 * 외부 호스트 API는 호출 불가!!
 *
 * 일반호출 및 Redux 미들웨어에서 모두 사용 가능
 */
export const invokeAPI =
  <T = any>(args1: invokeAPICommonArgs) =>
  (args2: invokeAPIArgs) => {
    const {method, path} = args1;
    const {subPath, params, data} = args2;

    const axiosObj: AxiosRequestConfig = {
      method,
      url: `${API_PATH}${path}${subPath ?? ''}`,
      params,
      data,
      timeout: REQUEST_TIMEOUT,
    };

    __DEV__ && console.log('restAPI Config: ', axiosObj);

    return axios<T>(axiosObj);
  };

/**
 * rest API 요청 전송 함수(외부 호스트 사용 가능)
 *
 * 외부 호스트 API 호출 가능
 *
 * 일반 호출은 가능하지만, Redux 미들웨어에서는 사용 불가
 */
export const invokeExternalAPI = <T = any>(args: invokeExternalAPIArgs) => {
  const {method, url, params, data, headers} = args;
  const axiosObj: AxiosRequestConfig = {
    method,
    url,
    params,
    data,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'Cache-Control': 'no-store',
      ...headers,
    },
  };

  __DEV__ && console.log('restAPI Config: ', axiosObj);

  return axios<T>(axiosObj);
};

/**
 * rest API 파일 업로드 요청 전송 함수(내부 호스트 전용)
 * - 외부 호스트 호출 불가!!!
 * - 일반호출 및 Redux 미들웨어에서 모두 사용 가능
 * - 실제 사용 여부가 불분명하여 주석처리함
 */
/* export const invokeFileUpload =
  <T = any>(args1: invokeAPICommonArgs) =>
  (args2: invokeFileUploadArgs) => {
    const {method, path} = args1;
    const {subPath, files, params, formName} = args2;

    const formData = convertFormDataWhenFileUpload(files, formName);

    const axiosObj: AxiosRequestConfig = {
      method,
      url: `${API_PATH}${path}${subPath ?? ''}`,
      data: formData,
      params,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: REQUEST_TIMEOUT,
    };

    __DEV__ && console.log('restAPI Config: ', axiosObj);

    return axios<T>(axiosObj);
  }; */

/**
 * rest API 파일 업로드 요청 전송 함수(외부 호스트 전용)
 * - 외부 호스트만 호출 가능
 * - 일반 호출은 가능하나 Redux 미들웨어에서는 사용 불가능
 * - 실제 사용 여부가 불분명하여 주석처리함
 */
/* export const invokeExternalFileUpload = <T = any>(
  args: invokeExternalFileUploadArgs,
) => {
  const {method, url, files, params, formName, headers} = args;

  const formData = convertFormDataWhenFileUpload(files, formName);

  const axiosObj: AxiosRequestConfig = {
    method,
    url,
    data: formData,
    params,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Cache-Control': 'no-store',
      ...headers,
    },
    timeout: REQUEST_TIMEOUT,
  };

  __DEV__ && console.log('restAPI Config: ', axiosObj);

  return axios<T>(axiosObj);
}; */
