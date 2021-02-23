import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  serverId: '',
};

const slice = createSlice({
  name: 'server',
  initialState,
  reducers: {
    setServerId: (state, action) => {
      return {
        ...state,
        serverId: action.payload,
      }
    },
  }
});

export default slice.reducer;
export const { setServerId } = slice.actions;