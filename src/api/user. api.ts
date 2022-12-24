import { User } from "./../model/userModel";
import { api } from "./serverApi";

/*
@param: email: string, password: string, name: string
@description: 회원가입 서비스
@refact: 
@todo: 
*/
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
