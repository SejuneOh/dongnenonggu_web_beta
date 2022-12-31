import { funcSignIn } from "./../api/user.api";
import loginSlice from "./loginSlice";
import { Cookies } from "react-cookie";

export const loginActions = loginSlice.actions;

const cookie = new Cookies();

// login
export const funcLogin = () => {
  return async (dispatch: any, getState: any) => {
    const isLogin = getState().login.isLogin;

    if (isLogin) return;

    dispatch(loginActions.doLogin(true));
  };
};

// logout
export const funcLogOut = () => {
  return (dispatch: any, getState: any) => {
    const isLogin = getState().login.isLogin;

    if (!isLogin) return;

    cookie.remove("auth_token");
    cookie.remove("login_user");

    dispatch(loginActions.doLogin(false));
  };
};
