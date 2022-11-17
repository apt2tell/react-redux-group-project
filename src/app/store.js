/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit';

export  const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
