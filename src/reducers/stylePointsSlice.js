// stylePointsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedStylePointId: null,
};

const stylePointsSlice = createSlice({
  name: 'stylePoints',
  initialState,
  reducers: {
    setSelectedStylePointId: (state, action) => {
      state.selectedStylePointId = action.payload;
    },
  },
});

export const { setSelectedStylePointId } = stylePointsSlice.actions;

export const selectSelectedStylePointId = (state) => state.stylePoints.selectedStylePointId;

export default stylePointsSlice.reducer;
