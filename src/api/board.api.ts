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
export const funcDeleteBoardById = async (id: number): Promise<boolean> => {
  const res = await api.delete(`/v1/board/${id}`);

  if (res.status !== 200) {
    return false;
  }

  return true;
};

//Paging 조회
export const funcSearchBoardPage = async (
  page?: number,
  count?: number
): Promise<any> => {
  try {
    const res = await api.get("/v1/board/paging", {
      params: {
        page,
        count,
      },
    });
    console.log("🚀 ~ file: board.api.ts:32 ~ res", res);

    return res;
  } catch (error) {}
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
