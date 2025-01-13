/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {setupStore} from '@redux/store';
import ContextProvider from '@contexts';

const store = setupStore();

const Root = () => {
  return (
    <Provider store={store}>
      <ContextProvider contexts={[]}>
        <App />
      </ContextProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
