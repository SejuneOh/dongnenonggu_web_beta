import { funcLogin } from "./../store/loginAction";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux_hooks";

export const useLogin = (): boolean => {
  const value = useAppSelector((state) => state.login.isLogin);
  const _token = sessionStorage.getItem("access_token");
  const dispatch = useAppDispatch();

  const [token, setToken] = useState<string | null>(_token);

  useEffect(() => {
    // 로그인이 되어있는 겨우
    if (value) return;

    // token이 없는 경우 return;
    if (!token) return;
    dispatch(funcLogin());
  }, [value, token]);

  return value;
};
