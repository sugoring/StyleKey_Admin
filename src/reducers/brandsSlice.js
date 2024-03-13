import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedBrandId: localStorage.getItem("selectedBrandId") || null,
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setSelectedBrandId: (state, action) => {
      state.selectedBrandId = action.payload;
      localStorage.setItem("selectedBrandId", action.payload);
    },
  },
});

export const { setSelectedBrandId } = brandSlice.actions;
export const selectSelectedBrandId = (state) => state.brand.selectedBrandId;
export default brandSlice.reducer;
