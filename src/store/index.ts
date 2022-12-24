import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import postSlice from "./postSlice";
import stepSlice from "./stepSlice";
import uploadSlice from "./UploadPostSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    post: postSlice.reducer,
    step: stepSlice.reducer,
    upload: uploadSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
