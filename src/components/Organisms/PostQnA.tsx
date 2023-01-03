import { useEffect, useState } from "react";
import { getBoardComment } from "../../api/comment.api";
import { ComponentProps, makePostItem } from "../../HoC/MakePostItem";

export interface Comment {
  boardNo: number;
  commentId: number;
  cotent: string;
  deps: number;
  group: number;
  order: number;
  writerId: string;
  createAt: Date;
  updateAt: Date | null;
  deleteAt: Date | null;
}

interface Comments {
  commentList: Comment[][];
}

function PostQnA({ board }: ComponentProps) {
  const [comments, setComments] = useState<Comments>();

  useEffect(() => {
    const getComment = async (boardNo: string) => {
      const result: Array<Comment> = await getBoardComment(boardNo);

      if (result.length === 0) setComments(undefined);
      else {
        // result.
      }

      setComments(comments);
    };

    getComment(board.boardNo!.toString());
  }, [comments]);

  return <div>PostQnA</div>;
}

export default makePostItem(PostQnA);
