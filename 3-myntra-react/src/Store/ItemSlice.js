import { createSlice } from "@reduxjs/toolkit"


const ItemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addinitialItems: (state, action) => {
      // console.log("reducers", state, action);
      return action.payload;
    }
  }
});

export const ItemsAction = ItemsSlice.actions

export default ItemsSlice;