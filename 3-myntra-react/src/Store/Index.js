import { configureStore } from "@reduxjs/toolkit"
import ItemsSlice from "./ItemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";



const myntraStore = configureStore({
  reducer: {
    items: ItemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer
  }
});
export default myntraStore;