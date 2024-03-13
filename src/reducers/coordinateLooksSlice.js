import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCoordinateLookId: localStorage.getItem('selectedCoordinateLookId') || null,
};

const coordinateLooksSlice = createSlice({
  name: 'coordinateLooks',
  initialState,
  reducers: {
    setSelectedCoordinateLookId: (state, action) => {
      state.selectedCoordinateLookId = action.payload;
      localStorage.setItem('selectedCoordinateLookId', action.payload);
    },
  },
});

export const { setSelectedCoordinateLookId } = coordinateLooksSlice.actions;
export const selectSelectedCoordinateLookId = (state) => state.coordinateLooks.selectedCoordinateLookId;
export default coordinateLooksSlice.reducer;
