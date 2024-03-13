import { configureStore } from '@reduxjs/toolkit';
import stylePointsReducer from './stylePointsSlice';
import brandsReducer from './brandsSlice';
import coordinateLooksReducer from './coordinateLooksSlice';

// store 생성: state와 dispatch할 함수들을 가지는 저장소 역할
const store = configureStore({
  reducer: {
    stylePoints: stylePointsReducer,
    brands: brandsReducer,
    coordinateLooks: coordinateLooksReducer
  }
});

export default store;
