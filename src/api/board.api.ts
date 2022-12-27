import { api } from "./serverApi";

// 생성
const funcCreateBoard = async (): Promise<any> => {
  const res = await api.post("/");
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
