import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegistUser } from "../model/userModel";

const initState: RegistUser = {
  email: "",
  password: "",
  name: "",
};

const userRegistSlice = createSlice({
  name: "userRegist",
  initialState: initState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state = { ...state, email: action.payload };
    },
    setPassword(state, action: PayloadAction<string>) {
      state = { ...state, password: action.payload };
    },
    setName(state, action: PayloadAction<string>) {
      state = { ...state, name: action.payload };
    },
  },
});
