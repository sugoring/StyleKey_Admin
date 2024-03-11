import { configureStore } from '@reduxjs/toolkit';
import stylePointsReducer from './stylePointsSlice';

// Redux 스토어 설정
export const store = configureStore({
  reducer: {
    stylePoints: stylePointsReducer,
    // 다른 리듀서들이 있다면 이곳에 추가할 수 있습니다.
  },
});

export default store;
