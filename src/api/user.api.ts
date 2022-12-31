import { AxiosError } from "axios";
import { User } from "../model/userModel";
import { api } from "./serverApi";
import { Cookies } from "react-cookie";

/*
@param: email: string, password: string, name: string
@description: 회원가입 서비스
@refact: 
@todo: 
*/

const cookie = new Cookies();

export const funcRegistUser = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const result = await api.post("/v1/user/regist", {
      email,
      password,
      name,
    });

    if (result.status !== 200) return false;

    return true;
  } catch (err) {
    console.log("🚀 ~ file: serverApi.ts:174 ~ err", err);
  }
};

/*
  @param: email, name, uuid
  @description: 회원 찾기
  @refact: 
  @todo: 
*/
export const funcGetUser = async (
  email?: string,
  name?: string,
  uuid?: string
): Promise<User> => {
  if (!email && !name && !uuid) return {};
  if (!email) email = "";
  if (!name) name = "";
  if (!uuid) uuid = "";

  try {
    const ret = await api.get("/v1/user/search", {
      params: {
        email,
        name,
        uuid,
      },
    });

    return ret.data.user;
  } catch (error) {
    throw new Error(`Server Error in ${funcGetUser.name}`);
  }
};

export const funcSignIn = async (email: string, pass: string) => {
  try {
    const res = await api.post("/v1/auth/signin", {
      email: email,
      password: pass,
    });

    // access_token 저장
    cookie.set("access_token", res.headers.access_token);
    cookie.set("login_user", res.data.uuid);

    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${res.headers.access_token}`;

    return { success: true, msg: "로그인 성공" };
  } catch (error) {
    const errorRes = error as AxiosError;

    if (errorRes.response?.status === 401)
      return { success: false, msg: "사용자를 찾을 수 없습니다." };
  }
};

export const funcSignOut = async () => {
  const res = await api.post("/v1/auth/signout");

  const clearToken = res.headers.access_token;

  api.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${res.headers.access_token}`;

  cookie.set("auth_token", clearToken);
  cookie.set("login_user", "");
};
