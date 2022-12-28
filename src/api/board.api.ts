import { createBoard } from "./../model/board.model";
import { api } from "./serverApi";

// 생성
export const funcCreateBoard = async (newBoard: createBoard): Promise<any> => {
  try {
    const res = await api.post("/v1/board", { ...newBoard });

    return res.data;
  } catch (err) {
    console.log("🚀 ~ file: board.api.ts:12 ~ funcCreateBoard ~ err", err);
  }
};

//삭제
const funcDeleteBoard = async (): Promise<any> => {
  const res = await api.delete("/");
};

//Paging 조회
const funcSearchBoardPage = async (): Promise<any> => {
  const res = await api.delete("/");
};

// AllBoard 조회
const funcSearchAllBaord = async (): Promise<any> => {
  const res = await api.delete("/");
};

//단일 조회
const funcSearchOneBoard = async (): Promise<any> => {
  const res = await api.delete("/");
};

export default { funcCreateBoard };
