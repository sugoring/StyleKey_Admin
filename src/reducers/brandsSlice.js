import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBrandId: localStorage.getItem('selectedBrandId') || 0,
};

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    setSelectedBrandId: (state, action) => {
      state.selectedBrandId = action.payload;
      localStorage.setItem('selectedBrandId', action.payload);
    },
    reset: () => {
      localStorage.removeItem('selectedBrandId');
      return initialState;
    },
  },
});

export const { setSelectedBrandId, reset } = brandsSlice.actions;
export const selectSelectedBrandId = (state) => state.brands.selectedBrandId;
export default brandsSlice.reducer;
