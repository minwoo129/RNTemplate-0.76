import {combineReducers} from '@reduxjs/toolkit';
import AppInfo from './AppInfo';
import Test from './Test';

const rootReducer = combineReducers({
  AppInfo,
  Test,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
