import { createSlice } from '@reduxjs/toolkit';

// initial state 생성
const initialState = {
  selectedStylePointId: localStorage.getItem('selectedStylePointId') || null,
};

// slice 생성 : createSlice (name, initialState, reducers)
const stylePointsSlice = createSlice({
  name: 'stylePoints',
  initialState,
  reducers: {
    setSelectedStylePointId: (state, action) => {
      state.selectedStylePointId = action.payload;
      localStorage.setItem('selectedStylePointId', action.payload);
    },
  },
});

// export
export const { setSelectedStylePointId } = stylePointsSlice.actions;
export const selectSelectedStylePointId = (state) => state.stylePoints.selectedStylePointId;
export default stylePointsSlice.reducer;
