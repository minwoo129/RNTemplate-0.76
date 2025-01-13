export type initialStateType = {
  /** 이름 */
  name: string;
  /** 나이 */
  age: number;
  /** 성별 */
  gender: Gender;
};

export type Gender = '남' | '여';
