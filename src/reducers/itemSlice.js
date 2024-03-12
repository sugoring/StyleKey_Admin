import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedItem: localStorage.getItem('selectedItem') || null,
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
      localStorage.setItem('selectedItem', action.payload);
    },
  },
});

export const { setSelectedItem } = itemSlice.actions;
export const selectSelectedItem = (state) => state.items.selectedItem;
export default itemSlice.reducer;
