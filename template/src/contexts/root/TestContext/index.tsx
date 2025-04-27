import React, {createContext, useState} from 'react';
import {TestContextStateType, TestContextType} from './types';
import {ProviderType} from '../../types';

const TestContext = createContext<TestContextType>({
  state: {testValue: ''},
  setState: {setTestValue: () => {}},
});

export const TestContextProvider: ProviderType = ({children}) => {
  const [testValue, setTestValue] =
    useState<TestContextStateType<'testValue'>>('');
  return (
    <TestContext.Provider
      value={{
        state: {testValue},
        setState: {setTestValue},
      }}>
      {children}
    </TestContext.Provider>
  );
};

export default TestContext;
