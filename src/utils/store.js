import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import LiveChatSlice from "./LiveChatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search : searchSlice,
    chat: LiveChatSlice,
  },
});

export default store;
