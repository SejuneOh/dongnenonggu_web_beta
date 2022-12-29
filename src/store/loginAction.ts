import loginSlice from "./loginSlice";
import { Cookies } from "react-cookie";

export const loginActions = loginSlice.actions;

const cookie = new Cookies();

export const funcSetisLogin = (isSuccess: boolean) => {
  return (dispatch: any, getState: any) => {
    if (!isSuccess) {
      console.log(isSuccess);

      cookie.remove("access_token");
      cookie.remove("login_user");
    }
    console.log(isSuccess);

    dispatch(loginActions.doLogin(isSuccess));
  };
};
