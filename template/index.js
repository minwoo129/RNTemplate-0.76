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
import {TestContextProvider} from '@contexts/root/TestContext';

const store = setupStore();

const Root = () => {
  return (
    <Provider store={store}>
      <ContextProvider contexts={[TestContextProvider]}>
        <App />
      </ContextProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
