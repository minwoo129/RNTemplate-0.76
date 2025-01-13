import {AxiosHeaders, Method} from 'axios';

export type method = 'get' | 'post' | 'patch' | 'delete' | 'put';

export interface invokeAPICommonArgs {
  /**
   * restAPI 요청 메서드(get, post, put, patch, delete)
   */
  method: Method;
  /**
   * 내부 호스트 API 요청 시 기본 API 경로
   */
  path: string;
}

export interface invokeAPIArgs {
  /**
   * 내부 호스트 API 요청 시 추가로 붙어야 할 경로 또는 Query string
   */
  subPath?: string;
  /**
   * API 호출 시 넘어가야 할 데이터
   *
   * - API 명세서(Swagger 기준)에 적혀있는 요청 데이터 중 "query"라고 적혀있는 데이터는 여기에 적용해줘야 함!!
   */
  params?: any;
  /**
   * API 호출 시 요청 데이터
   *
   * - API 명세서(Swagger 기준)에 적혀있는 요청 데이터 중 "body"라고 적혀있는 데이터는 여기에 적용해줘야 함!!
   */
  data?: any;
}

export interface invokeExternalAPIArgs {
  /**
   * restAPI 요청 메서드(get, post, put, patch, delete)
   */
  method: method;
  /**
   * API 경로(http 포함)
   */
  url: string;
  /**
   * API 호출 시 넘어가야 할 데이터
   *
   * - API 명세서(Swagger 기준)에 적혀있는 요청 데이터 중 "query"라고 적혀있는 데이터는 여기에 적용해줘야 함!!
   */
  params?: any;
  /**
   * API 호출 시 요청 데이터
   *
   * - API 명세서(Swagger 기준)에 적혀있는 요청 데이터 중 "body"라고 적혀있는 데이터는 여기에 적용해줘야 함!!
   */
  data?: any;
  /**
   * 외부 API 호출 시 사용할 Header
   *
   * 필요시에만 사용할 것!!!
   */
  headers?: AxiosHeaders;
}

export interface invokeFileUploadArgs {
  /**
   * 내부 호스트 API 요청 시 추가로 붙어야 할 경로 또는 Query string
   */
  subPath?: string;
  /**
   * 파일 업로드를 위한 기본적인 파일 DTO
   *
   * - form 데이터 변환은 함수 내부에서 이루어지니 따로 변환할 필요 없음!!!
   */
  files: uploadFileType[];
  /**
   * API 호출 시 넘어가야 할 데이터
   *
   * - API 명세서(Swagger 기준)에 적혀있는 요청 데이터 중 "query"라고 적혀있는 데이터는 여기에 적용해줘야 함!!
   */
  params?: any;
  /**
   * form 데이터 변환시 사용될 이름
   *
   * - 평상시에는 default 값이 있으니 넘길 필요가 없지만, API에서 요구하는 별도의 form 데이터 이름이 있는 경우 적용해줄것!!
   */
  formName?: string;
}

export interface invokeExternalFileUploadArgs {
  /**
   * restAPI 요청 메서드(get, post, put, patch, delete)
   */
  method: method;
  /**
   * API 경로(http 포함)
   */
  url: string;
  /**
   * 파일 업로드를 위한 기본적인 파일 DTO
   *
   * - form 데이터 변환은 함수 내부에서 이루어지니 따로 변환할 필요 없음!!!
   */
  files: uploadFileType[];
  /**
   * API 호출 시 넘어가야 할 데이터
   *
   * - API 명세서(Swagger 기준)에 적혀있는 요청 데이터 중 "query"라고 적혀있는 데이터는 여기에 적용해줘야 함!!
   */
  params?: any;
  /**
   * form 데이터 변환시 사용될 이름
   *
   * - 평상시에는 default 값이 있으니 넘길 필요가 없지만, API에서 요구하는 별도의 form 데이터 이름이 있는 경우 적용해줄것!!
   */
  formName?: string;
  /**
   * 외부 API 호출 시 사용할 Header
   *
   * 필요시에만 사용할 것!!!
   */
  headers?: AxiosHeaders;
}

export type uploadFileType = {
  /**
   * 파일 이름(확장자 포함)
   *
   * 파일 uri에서 맨 마지막 "/" 뒤에 붙어 있는 string
   */
  fileName: string;
  /**
   * 파일 mime 타입
   */
  type: string;
  /**
   * 파일 uri
   */
  uri: string;
};
