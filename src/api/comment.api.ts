import { api } from "./serverApi";

export const getBoardComment = async (boardNo: string) => {
  console.log(
    "🚀 ~ file: comment.api.ts:4 ~ getBoardComment ~ boardNo",
    boardNo
  );
  try {
    const res = await api.get(`/v1/comment/${boardNo}`);
  } catch (err) {
    console.log("🚀 ~ file: comment.api.ts:7 ~ getBoardComment ~ err", err);
  }
};
