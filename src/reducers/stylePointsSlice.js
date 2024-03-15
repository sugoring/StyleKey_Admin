import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedStylePointId: localStorage.getItem('selectedStylePointId') || 0,
};

const stylePointsSlice = createSlice({
  name: 'stylePoints',
  initialState,
  reducers: {
    setSelectedStylePointId: (state, action) => {
      state.selectedStylePointId = action.payload;
      localStorage.setItem('selectedStylePointId', action.payload);
    },
    reset: () => {
      localStorage.removeItem('selectedStylePointId');
      return initialState;
    },
  },
});

export const { setSelectedStylePointId, reset } = stylePointsSlice.actions;
export const selectSelectedStylePointId = (state) => state.stylePoints.selectedStylePointId;
export default stylePointsSlice.reducer;
