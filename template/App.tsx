/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AppMain from '@pages/root/AppMain';
import AppTest from '@pages/root/AppTest';
import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  const [devForm, setDevForm] = useState(true);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider testID="SafeAreaProvider">
        {__DEV__ && devForm ? <AppTest setDevForm={setDevForm} /> : <AppMain />}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
