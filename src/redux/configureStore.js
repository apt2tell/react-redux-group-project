/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './Rocket/RocketSlice';
import missionsReducer from './Missions/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
