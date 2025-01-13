import React from 'react';
import {ContextProviderType} from './types';

const ContextProvider: ContextProviderType = ({contexts, children}) =>
  contexts.reduce(
    (prev, context) => React.createElement(context, {children: prev}),
    children,
  );

// 폴더 단위로 Context 생성 후 Provider export 처리

export default ContextProvider;
