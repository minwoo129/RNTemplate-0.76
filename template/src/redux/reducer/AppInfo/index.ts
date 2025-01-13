import {createSlice} from '@reduxjs/toolkit';
import {AppInfoInitialState as initialState} from '../../constants';
import {setAppInfoAction} from './types';

const AppInfoSlice = createSlice({
  name: 'AppInfo',
  initialState,
  reducers: {
    setAppInfo: (state, action: setAppInfoAction) => {
      const {init, login} = action.payload;

      state.init = init;
      state.login = login;
    },
  },
});

export default AppInfoSlice.reducer;
export const {setAppInfo} = AppInfoSlice.actions;
