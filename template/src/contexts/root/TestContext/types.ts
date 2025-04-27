export type TestContextType = {
  state: TestContextState;
  setState: TestContextSetState;
};

export type TestContextState = {
  testValue: string;
};

export type TestContextSetState = {
  setTestValue: (value: string) => void;
};

export type TestContextStateType<T extends keyof TestContextState> =
  TestContextState[T];
