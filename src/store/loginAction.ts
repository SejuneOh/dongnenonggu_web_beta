import loginSlice from "./loginSlice";
import { Cookies } from "react-cookie";

export const loginActions = loginSlice.actions;

const cookie = new Cookies();

export const funcSetisLogin = (isSuccess: boolean) => {
  return (dispatch: any, getState: any) => {
    if (isSuccess) {
      cookie.set("user_key", 1);
    } else {
      cookie.remove("user_key");
    }
    dispatch(loginActions.doLogin(isSuccess));
  };
};
