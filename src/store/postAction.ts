import { funcGetBoardData, funcGetPostDetail } from "./../api/serverApi";
import { PostModel } from "./../model/postModel";
import postSlice from "./postSlice";
import { Cookies } from "react-cookie";

const actions = postSlice.actions;
const cookie = new Cookies();

// middleware

export const getPostListData = (_page: number, _count: number) => {
  return async (dispatch: any, getState: any) => {
    const postList = await funcGetBoardData(_page, _count);

    if (!postList) {
      dispatch(actions.setPost(null));
    } else {
      dispatch(actions.setPost(postList));
    }
  };
};

export const funcUpdateList = () => {
  return async (dispatch: any, getState: any) => {
    // Count
    const cnt = getState().post.count;
    const page = 0;

    // 페이지 초기화
    dispatch(actions.clearPageNum());
    // 포스트 리스트 추가
    dispatch(actions.clearPostList());
    // 다시 불러온다
    dispatch(getPostListData(page, cnt));
  };
};

export const funcClearPageNum = () => {
  return (dispath: any, getState: any) => {
    if (!getState().post.page) return;

    dispath(actions.clearPageNum());
  };
};

export const funcFetchPostList = () => {
  return async (dispatch: any, getState: any) => {
    const postState = getState().post;

    const page = postState.page;
    const count = postState.count;
    const list = postState.postList;

    const fetchList = await funcGetBoardData(page, count);
    const newState = [...list, ...fetchList];

    dispatch(actions.fetchPostList(newState));
  };
};

export const funcClearPostList = () => {
  return (dispatch: any, getState: any) => {
    const list = getState().post.postList;

    if (!list) return;

    dispatch(actions.clearPostList());
  };
};

export const funcSetCurrentPost = (id: number) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    const postList = state.post.postList;
    const currentPost = state.post.currentPost;
    let ret: PostModel = {};

    // 현재 키가 같은 경우에는 현재 값을 리턴한다.
    if (currentPost?.boaderKey === id) return;
    if (!postList) {
      // 포스트 리스트가 없을 경우에는 api로 요청한다.
      const token = cookie.get("auth_token");
      // 디테일 함수로 값을 가져온다.
      ret = await funcGetPostDetail(id, token);
    } else {
      ret = postList.find((el: PostModel) => el.boardKey === id);
    }

    dispatch(actions.setCurrentPost(ret));
  };
};

export const funcIncreasePage = () => {
  return (dispatch: any, getState: any) => {
    dispatch(actions.increasePage());
  };
};
