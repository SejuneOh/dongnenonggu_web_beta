import { GroupComment } from "./../model/comment.model";
import { api } from "./serverApi";

export const getBoardComment = async (
  boardNo: string
): Promise<Array<GroupComment>> => {
  try {
    const res = await api.get(`/v1/comment/${boardNo}`);

    if (!res.data) return [];

    const data: Array<GroupComment> = res.data.map((item: any, idx: number) => {
      const ret: GroupComment = {
        groupId: item.group,
        comments: item.comments.map((comment: any) => {
          return {
            boardNo: comment.boardNo,
            commentId: comment.commentId,
            deps: comment.deps,
            order: comment.order,
            writerId: comment.writerId,
            writerName: comment.writerName,
            createAt: comment.createAt,
            updateAt: comment.updateAt ?? null,
            deleteAt: comment.deleteAt ?? null,
          };
        }),
      };

      return ret;
    });

    return data;
  } catch (err) {
    console.log("🚀 ~ file: comment.api.ts:7 ~ getBoardComment ~ err", err);
    return [];
  }
};

export async function funcCreateComment(
  boardNo: string,
  writerId: string,
  content: string
): Promise<boolean> {
  const body = {
    boardNo: parseInt(boardNo),
    writerId,
    content,
  };

  try {
    const res = await api.post(`/v1/comment/`, body);

    if (res.status === 201) return true;

    return false;
  } catch (err) {
    console.log("🚀 ~ file: comment.api.ts:58 ~ err", err);
    return false;
  }
}
