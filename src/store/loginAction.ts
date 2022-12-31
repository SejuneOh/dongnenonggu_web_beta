import { funcSignOut } from "./../api/user.api";
import loginSlice from "./loginSlice";
import { Cookies } from "react-cookie";

export const loginActions = loginSlice.actions;

const cookie = new Cookies();

// login
export const funcLogin = () => {
  return async (dispatch: any, getState: any) => {
    const isLogin = getState().login.isLogin;

    if (isLogin) return;

    dispatch(loginActions.setLogin(true));
  };
};

// logout
export const funcLogOut = () => {
  return async (dispatch: any, getState: any) => {
    const isLogin = getState().login.isLogin;
    console.log("🚀 ~ file: loginAction.ts:24 ~ return ~ isLogin", isLogin);

    if (!isLogin) return;

    await funcSignOut();

    dispatch(loginActions.setLogin(false));
  };
};
