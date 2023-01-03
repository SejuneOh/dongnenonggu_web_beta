import { Comment } from "../components/Organisms/PostQnA";
import { api } from "./serverApi";

export const getBoardComment = async (
  boardNo: string
): Promise<Array<Comment>> => {
  console.log(
    "🚀 ~ file: comment.api.ts:4 ~ getBoardComment ~ boardNo",
    boardNo
  );
  try {
    const res = await api.get(`/v1/comment/${boardNo}`);

    console.log("🚀 ~ file: comment.api.ts:14 ~ res", res);
    if (res.data.length > 0) {
      const ret: Array<Comment> = res.data.map((item: any) => {
        console.log(item);

        const commentItem: Comment = {
          boardNo: item.boardNo,
          commentId: item.commentId,
          cotent: item.cotent,
          deps: item.deps,
          order: item.order,
          group: item.group,
          writerId: item.writerId,
          createAt: item.createAt,
          updateAt: item.updateAt ?? null,
          deleteAt: item.deleteAt ?? null,
        };

        return commentItem;
      });
      console.log(
        "🚀 ~ file: comment.api.ts:29 ~ constret:Array<Comment>=res.data.map ~ ret",
        ret
      );

      const groupIds = ret.map((item) => item.group);
      const uniqueGroups = new Set(groupIds);
      console.log("🚀 ~ file: comment.api.ts:41 ~ uniqueGroups", uniqueGroups);

      return ret;
    } else {
      return [];
    }
  } catch (err) {
    console.log("🚀 ~ file: comment.api.ts:7 ~ getBoardComment ~ err", err);
    return [];
  }
};
