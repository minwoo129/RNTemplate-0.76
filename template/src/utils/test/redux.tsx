import React, {PropsWithChildren} from 'react';
import {RootState} from '@redux/reducer';
import {AppStore, setupStore} from '@redux/store';
import {render, type RenderOptions} from '@testing-library/react-native';
import {Provider} from 'react-redux';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({children}: PropsWithChildren<{}>) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return {
    store,
    ...render(ui, {wrapper: Wrapper, ...renderOptions}),
  };
};
