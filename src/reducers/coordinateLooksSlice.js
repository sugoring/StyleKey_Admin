import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCoordinateLookId: localStorage.getItem('selectedCoordinateLookId') || 0,
};

const coordinateLooksSlice = createSlice({
  name: 'coordinateLooks',
  initialState,
  reducers: {
    setSelectedCoordinateLookId: (state, action) => {
      state.selectedCoordinateLookId = action.payload;
      localStorage.setItem('selectedCoordinateLookId', action.payload);
    },
    reset: () => {
      localStorage.removeItem('selectedCoordinateLookId');
      return initialState;
    },
  },
});

export const { setSelectedCoordinateLookId, reset } = coordinateLooksSlice.actions;
export const selectSelectedCoordinateLookId = (state) => state.coordinateLooks.selectedCoordinateLookId;
export default coordinateLooksSlice.reducer;
