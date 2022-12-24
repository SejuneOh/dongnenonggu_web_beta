import { bool } from "./../../node_modules/@types/prop-types/index.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginFlag {
  isLogin: boolean;
}

const loginState: LoginFlag = {
  isLogin: false,
};

const loginSlice = createSlice({
  name: "loginProperty",
  initialState: loginState,
  reducers: {
    doLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
  },
});

export default loginSlice;
