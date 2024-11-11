import { createSlice } from "@reduxjs/toolkit"


const fetchStatusSlice = createSlice({
  name: 'fetchStaus',
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markfetchDone: (state) => {
      state.fetchDone = true;
    },
    markfetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markfetchingFinished: (state) => {
      state.currentlyFetching = false;
    },

  }
});

export const fetchStatusAction = fetchStatusSlice.actions

export default fetchStatusSlice;