declare module '@env' {
  // ==========================================
  // 내부 API 관련 정보(개발, 스테이징, 운영별로 다름)
  // ==========================================
  /** 내부 API 호스트 경로 */
  export const HOST: string;
  /** 내부 API 호출 포트번호 */
  export const PORT: string;
  /**
   * 서버 타입
   * - development: 개발서버
   * - staging: 스테이징서버
   * - production: 운영서버
   */
  export const SERVERTYPE: string;
}
