// stylePointsSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Function to initialize state from localStorage
const initialState = {
  selectedStylePointId: localStorage.getItem('selectedStylePointId') || null,
};

const stylePointsSlice = createSlice({
  name: 'stylePoints',
  initialState,
  reducers: {
    setSelectedStylePointId: (state, action) => {
      state.selectedStylePointId = action.payload;
      // Store the selected style point ID in localStorage
      localStorage.setItem('selectedStylePointId', action.payload);
    },
  },
});

export const { setSelectedStylePointId } = stylePointsSlice.actions;

export const selectSelectedStylePointId = (state) => state.stylePoints.selectedStylePointId;

export default stylePointsSlice.reducer;
