import { configureStore } from '@reduxjs/toolkit';
import stylePointsReducer from './stylePointsSlice';
import brandsReducer from './brandsSlice';
import coordinateLooksReducer from './coordinateLooksSlice';

const store = configureStore({
  reducer: {
    stylePoints: stylePointsReducer,
    brands: brandsReducer,
    coordinateLooks: coordinateLooksReducer
  }
});

export default store;
