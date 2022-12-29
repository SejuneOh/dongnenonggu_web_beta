import { Board } from "./../model/board.model";
import { funcSearchBoardPage } from "../api/board.api";
import boardSlice from "./board.slice";

const actions = boardSlice.actions;

export const funcSomething = () => {
  return (dispatch: any, getState: any) => {
    // do something
    return;
  };
};

export const funcSetTotalBoard = (limit: number) => {
  return async (dispatch: any, getState: any) => {
    // total page, total board count 가져오기
    const res = await funcSearchBoardPage(0, limit);

    const currnetPage = res.data?.pagingCounter;
    const totalPage = res.data?.totalPages;
    const totalBoards = res.data?.totalDocs;
    const boardDatas: Array<any> = res.data?.docs;

    // refresh에서 현제 패이지랑 response 페이지랑 같으면 리턴한다.
    if (currnetPage === getState().board.currentPage) return;

    // 현제 페이지
    dispatch(actions.setCurrentPage(currnetPage));
    // total page
    dispatch(actions.setTotalPages(totalPage));
    // total board count
    dispatch(actions.setTotalBoards(totalBoards));

    if (boardDatas.length === 0) return;

    const initBoardList = boardDatas.map((board) => {
      const newBoard: Board = {
        ...board,
      };

      return newBoard;
    });

    dispatch(actions.setBoardList(initBoardList));
  };
};

export const updateBoarderList = () => {
  return async (dispatch: any, getState: any) => {
    const limit = getState().board.limit;
    // 초기화
    dispatch(actions.clearBoardList());
    const ret = await funcSetTotalBoard(limit);
  };
};

export const funcBoardDataBinding = (page: number, count: number) => {
  return async (dispatch: any, getState: any) => {
    const result = await funcSearchBoardPage(page, count);

    if (!result) return;

    //board list, total board, total page binding
    dispatch();

    return null;
  };
};
