import { funcSignOut } from "../api/userApi";
import loginSlice from "./loginSlice";
import { Cookies } from "react-cookie";
import { api } from "../api/serverApi";

export const loginActions = loginSlice.actions;

const cookie = new Cookies();

// login
export const funcLogin = () => {
	return async (dispatch: any, getState: any) => {
		const isLogin = getState().login.isLogin;
		// const token = cookie.get("access_token");
		const token = sessionStorage.getItem("access_token");

		if (isLogin) return;

		api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

		dispatch(loginActions.setLogin(true));
	};
};

// logout
export const funcLogOut = () => {
	return async (dispatch: any, getState: any) => {
		const isLogin = getState().login.isLogin;

		if (!isLogin) return;

		await funcSignOut();

		dispatch(loginActions.setLogin(false));
	};
};
