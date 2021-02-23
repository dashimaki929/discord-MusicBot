import { createSlice } from '@reduxjs/toolkit';

// Stateの初期状態
const initialState = {
  count: 0,
};

// Sliceの作成
const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state, action) => {
      return {
        ...state,
        count: state.count + 1,
      }
    },
    decrement: (state, action) => {
      return {
        ...state,
        count: state.count - 1,
      }
    }
  }
});

// Reducerをエクスポート
export default slice.reducer;

// Action Creatorsをエクスポート
export const { increment, decrement } = slice.actions;