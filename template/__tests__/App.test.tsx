/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {fireEvent, render, screen} from '@testing-library/react-native';
// Note: import explicitly to use the types shipped with jest.
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  test,
} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {server} from '@mocks/server';
import {renderWithProviders} from '@utils/test/redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

describe('App', () => {
  beforeAll(() => {
    server.listen();
    AsyncStorage.clear();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
  });
  test('renders correctly', () => {
    const {getByTestId} = renderWithProviders(<App />);
    fireEvent.press(getByTestId('AppStartButton'));
    expect(screen.getByTestId('AppStartButton')).toBeTruthy();
    //const button = getByTestId('AppStartButton');
    //console.log('button:', button);
    //expect(1 + 1).toBe(2);
  });
});
