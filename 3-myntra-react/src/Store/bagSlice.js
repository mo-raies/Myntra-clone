import { createSlice } from "@reduxjs/toolkit"


const bagSlice = createSlice({
  name: 'bag',
  initialState: [],
  reducers: {
    addTobag: (state, action) => {
      state.push(action.payload);
    },
    removeFromeBag: (state, action) => {
      return state.filter(itemId => itemId !== action.payload);
    }
  }
});

export const bagSliceAction = bagSlice.actions

export default bagSlice;