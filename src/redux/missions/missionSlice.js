import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initialise state
const initialState = [];

// Mission base url
const APIurl = 'https://api.spacexdata.com/v3/missions';

// Create Thunk action Creator
export const getMissionsAPI = createAsyncThunk(
  'missions/getMissions', async () => {
    const resp = await axios.get(APIurl);
    return resp.data;
  },
);

// Create Slice Reducer
const MissionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: {
      reducer: (state, action) => state.map((item) => (
        item.missionId !== action.payload ? item : { ...item, missionActive: true }
      )),
    },

    leaveMission: {
      reducer: (state, action) => state.map((item) => (
        item.missionId !== action.payload ? item : { ...item, missionActive: false }
      )),
    },
  },
  extraReducers: {
    [getMissionsAPI.fulfilled]: (state, action) => {
      const missions = action.payload.map((item) => ({
        missionId: item.mission_id,
        missionName: item.mission_name,
        missionDesc: item.description,
        missionLink: item.wikipedia,
        missionActive: false,
      }));
      return missions;
    },
  },
});

export const selectAllMissions = (state) => state.missions;
export const { joinMission, leaveMission } = MissionSlice.actions;
export default MissionSlice.reducer;
