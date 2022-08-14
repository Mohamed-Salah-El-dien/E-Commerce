import { configureStore } from '@reduxjs/toolkit';
import gridSlice from './gridSlice';

const store = configureStore({
  reducer: {
    grid: gridSlice.reducer,
  },
});

export default store;
