import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./board.slice";
import loginSlice from "./loginSlice";
import stepSlice from "./stepSlice";
import uploadSlice from "./UploadPostSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    step: stepSlice.reducer,
    upload: uploadSlice.reducer,
    board: boardSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
