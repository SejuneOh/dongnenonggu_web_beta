export interface Comment {
  boardNo: number;
  commentId: number;
  content: string;
  deps: number;
  order: number;
  group: number;
  writerId: string;
  writerName: string;
  createAt: Date;
  updateAt: Date | null;
  deleteAt: Date | null;
}

export interface GroupComment {
  groupId: number;
  comments: Array<Comment>;
}

export type CreateComment = Pick<Comment, "boardNo" | "writerId" | "content">;
