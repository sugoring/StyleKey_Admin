import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  id: "",
  isLoading: false, // 예시로만 추가됨. 실제 로직에 따라 사용해야 함.
  isLogin: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { name, id } = action.payload;
      state.name = name;
      state.id = id;
      state.isLogin = true;
      state.isLoading = false; 
    },
    clearUser: (state) => {
      state.name = initialState.name;
      state.id = initialState.id;
      state.isLogin = false; 
      state.isLoading = false;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { loginUser, clearUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
