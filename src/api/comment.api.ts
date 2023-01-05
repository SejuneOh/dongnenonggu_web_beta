import { Comment, GroupComment } from "./../model/comment.model";
import { api } from "./serverApi";

export const getBoardComment = async (
  boardNo: string
): Promise<Array<GroupComment>> => {
  try {
    const res = await api.get(`/v1/comment/${boardNo}`);

    if (!res.data) return [];

    const data: Array<GroupComment> = res.data.map((item: any, idx: number) => {
      const commentlist: Array<Comment> = item.comments.map((comment: any) => {
        return {
          boardNo: comment.boardNo,
          commentId: comment.commentId,
          deps: comment.deps,
          order: comment.order,
          content: comment.content,
          writerId: comment.writerId,
          writerName: comment.writerName,
          createAt: comment.createAt,
          updateAt: comment.updateAt ?? null,
          deleteAt: comment.deleteAt ?? null,
        };
      });

      const sortComment = commentlist.sort((a: Comment, b: Comment) => {
        if (a.order > b.order) return 1;
        if (a.order < b.order) return -1;
        return 0;
      });

      const ret: GroupComment = {
        groupId: item.group,
        comments: sortComment,
      };

      return ret;
    });

    const sortData = data.sort((a: GroupComment, b: GroupComment) => {
      if (a.groupId > b.groupId) return -1;
      if (a.groupId < b.groupId) return 1;
      return 0;
    });
    return sortData;
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
