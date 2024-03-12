import { createSlice } from '@reduxjs/toolkit';

// localStorage에서 초기 상태를 가져오는 함수
const initialState = {
  // localStorage에서 선택된 StylePoint ID를 가져오거나 없으면 null로 설정
  selectedStylePointId: localStorage.getItem('selectedStylePointId') || null,
};

// 객체를 선언한 변수로 할당함
const stylePointsSlice = createSlice({
  name: 'stylePoints',
  initialState,
  reducers: {
    // 선택된 StylePoint ID를 설정하는 reducer
    setSelectedStylePointId: (state, action) => {
      // 선택된 StylePoint ID를 action.payload로 설정
      state.selectedStylePointId = action.payload;
      // 선택된 StylePoint ID를 localStorage에 저장
      localStorage.setItem('selectedStylePointId', action.payload);
    },
  },
});

// reducer action을 내보냄
export const { setSelectedStylePointId } = stylePointsSlice.actions;

// 현재 선택된 StylePoint ID를 선택하는 셀렉터
export const selectSelectedStylePointId = (state) => state.stylePoints.selectedStylePointId;

// StylePoint 슬라이스 reducer를 내보냄
export default stylePointsSlice.reducer;
