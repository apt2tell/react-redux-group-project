import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial State
const initialState = [];

// Rocket base url
const APIurl = 'https://api.spacexdata.com/v3/rockets';

// Async Action Thunk
export const getRocketAPI = createAsyncThunk(
  'rockets/getRocketAPI',
  async () => {
    const resp = await axios.get(APIurl);
    return resp.data;
  },
);

// Slice Reducer
const RocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => state.map((item) => (
      item.id === action.payload ? { ...item, active: true } : item)),

    cancelRocket: (state, action) => state.map((item) => (
      item.id === action.payload ? { ...item, active: false } : item
    )),
  },

  extraReducers: (builder) => {
    builder
      .addCase(getRocketAPI.fulfilled, (state, action) => action.payload);
  },
});

export const { reserveRocket, cancelRocket } = RocketSlice.actions;

export default RocketSlice.reducer;
