import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedBrandId: localStorage.getItem("selectedBrandId") || null,
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    setSelectedBrandId: (state, action) => {
      state.selectedBrandId = action.payload;
      localStorage.setItem("selectedBrandId", action.payload);
    },
  },
});

export const { setSelectedBrandId } = brandsSlice.actions;
export const selectSelectedBrandId = (state) => state.brands.selectedBrandId;
export default brandsSlice.reducer;
