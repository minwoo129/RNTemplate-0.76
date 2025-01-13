import {createSlice} from '@reduxjs/toolkit';
import {TestInitialState as initialState} from '../../constants';
import {setTestAction} from './types';

const TestSlice = createSlice({
  name: 'Test',
  initialState,
  reducers: {
    setTest: (state, action: setTestAction) => {
      const {age, gender, name} = action.payload;

      state.age = age;
      state.gender = gender;
      state.name = name;
    },
  },
});

export default TestSlice.reducer;
export const {setTest} = TestSlice.actions;
