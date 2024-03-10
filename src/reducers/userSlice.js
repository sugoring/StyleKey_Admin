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
      state.isLoading = false; // 로그인 시도 후 로딩 상태 해제 예시
    },
    clearUser: (state) => {
      state.name = initialState.name;
      state.id = initialState.id;
      state.isLogin = false; // 명시적으로 로그아웃 상태 설정
      state.isLoading = false; // 필요에 따라 추가
    },
    // 필요에 따라 로딩 상태를 관리할 수 있는 액션 추가
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { loginUser, clearUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
