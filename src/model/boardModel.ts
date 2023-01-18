export interface BoardModel {
  [key: string | number]: string | number | boolean | Date;
  boardNo: number; //게시글 id
  title: string; // 제목
  content: string; // 내용
  location: string; // 경기장 위치
  locationDetail: string; // 상세주소
  zoneNumber: number;
  guestCnt: number;
  writerId: string; //  작성자 id
  writerName: string;
  commentId: number; // 댓글 id
  price: number;
  isOutdoor: boolean;
  createAt: Date;
  updateAt: Date;
  deleteAt: Date;
}

export type Board = Partial<BoardModel>;
export type createBoard = Pick<
  BoardModel,
  | "title"
  | "content"
  | "location"
  | "locationDetail"
  | "zoneNumber"
  | "writerId"
  | "guestCnt"
  | "price"
  | "isOutdoor"
>;

export type UpdateBoard = Pick<
  BoardModel,
  | "title"
  | "content"
  | "location"
  | "locationDetail"
  | "zoneNumber"
  | "guestCnt"
  | "price"
  | "isOutdoor"
>;
