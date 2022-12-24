import { PostModel } from "./../model/postModel";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface PostSliceInitInterface {
  postList: Array<PostModel> | null;
  currentPost: PostModel | null;
  page: number;
  count: number;
}
const initState: PostSliceInitInterface = {
  postList: null,
  currentPost: null,
  page: 0,
  count: 18,
};

const postSlice = createSlice({
  name: "post",
  initialState: initState,
  reducers: {
    clearPostList(state) {
      state.postList = null;
    },
    setPost(state, action: PayloadAction<Array<PostModel> | null>) {
      state.postList = action.payload;
    },
    setCurrentPost(state, action: PayloadAction<PostModel>) {
      state.currentPost = action.payload;
    },
    increasePage(state) {
      state.page += 1;
    },
    fetchPostList(state, action: PayloadAction<Array<PostModel>>) {
      state.postList = action.payload;
    },
    clearPageNum(state) {
      state.page = 0;
    },
  },
});

export default postSlice;
