import { PostModel } from "./../model/postModel";
import axios from "axios";
import { encode } from "base-64";
import { Cookies } from "react-cookie";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

const cookie = new Cookies();

export const funcGetBoardData = async (idx: number, count: number) => {
  try {
    const url = "/api/board/list";
    const res = await api.get(url, {
      params: {
        page: `${idx}`,
        size: `${count}`,
        sort: "boardkey,desc",
      },
    });

    if (res.status === 200) {
      const list = res.data.content.map((el: any) => {
        const data: PostModel = {
          bordContent: el.boardcontent,
          boardKey: el.boardkey,
          address: el.address,
          addressDetail: el.addressdetail,
          zoneNumber: el.zonenumber,
          boardTitle: el.boardtitle,
          boardView: el.boardviews,
          createdDate: el.createdDate,
          modifiedDate: el.modifiedDate,
          userKey: el.userkey,
          userNickName: el.usernickname,
        };

        return data;
      });

      return list;
    }
  } catch (ee) {
    console.log("🚀 ~ file: serverApi.ts:41 ~ funcGetBoardData ~ ee", ee);
  }
};

export const funcDoLogin = async (
  _id: string,
  _password: string
): Promise<boolean> => {
  const url = "/api/user/token";
  const userInfo = encode(`${_id}:${_password}`);
  const option = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Expose-Headers": "*",
    Authorization: "Basic " + userInfo,
  };

  try {
    const res = await api.post(url, {}, { headers: option });

    if (res.status !== 200) return false;

    cookie.set("auth_token", res?.data);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const funcGetPostDetail = async (
  id: number,
  token: string
): Promise<PostModel> => {
  const url = `/api/board/list`;
  const option = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Expose-Headers": "*",
    // Authorization: "Bearer " + token,
  };

  try {
    // id가 없을 경우에는 빈 객체 리턴
    if (!id || !token) return {};

    const res = await axios.get(url, { params: { id }, headers: option });
    const ret: PostModel = {
      boardKey: res.data.boardkey,
      boardTitle: res.data.boardtitle,
      boardView: res.data.boardviews,
      userKey: res.data.userkey,
      userNickName: res.data.usernickname,
      address: res.data.address,
      addressDetail: res.data.addressdetail,
      zoneNumber: res.data.zonenumber,
      createdDate: res.data.createdDate,
      modifiedDate: res.data.modifiedDate,
    };

    return ret;
  } catch (ee) {
    return {};
  }
};

export const funcUploadPost = async (
  _boardTitle: string,
  _boardContent: string,
  _address: string,
  _addressDetail: string,
  _zoneNumber: number
) => {
  const url = "/api/board/write";

  const body = {
    boardtitle: _boardTitle,
    boardcontent: _boardContent,
    address: _address,
    addressdetail: _addressDetail,
    zonenumber: _zoneNumber,
    userkey: "1",
  };

  const option = {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Expose-Headers": "*",
  };

  try {
    const res = await api.post(url, body, { headers: option });

    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log("🚀 ~ file: serverApi.ts:137 ~ e", e);
    return false;
  }
};
