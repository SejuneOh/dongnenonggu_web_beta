import { funcLogin } from "./../store/loginAction";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

export const useLogin = (): boolean => {
	const value = useAppSelector(state => state.login.isLogin);

	return value;
};
