import { Board, createBoard } from "./../model/board.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitBoardSliceInterface {
  boardList: Array<Board>;
  uploadBoard: createBoard;
  totalBoard: number;
  totalPages: number;
}

const initState: InitBoardSliceInterface = {
  boardList: [],
  uploadBoard: {
    title: "",
    content: "",
    location: "",
    locationDetail: "",
    zoneNumber: 0,
    writerId: "",
    guestCnt: 0,
    price: 0,
    isOutdoor: true,
  },
  totalBoard: 0,
  totalPages: 0,
};
const boardSlice = createSlice({
  name: "board",
  initialState: initState,
  reducers: {
    clearBoardList(state) {
      Object.assign(state, initState.boardList);
    },
    clearUploadBoard(state) {
      Object.assign(state, initState.uploadBoard);
    },
    setIsOutdoor(state, action: PayloadAction<boolean>) {
      state.uploadBoard.isOutdoor = action.payload;
    },
    setLocation(state, action: PayloadAction<string>) {
      state.uploadBoard.location = action.payload;
    },
    setDetailLocation(state, action: PayloadAction<string>) {
      state.uploadBoard.locationDetail = action.payload;
    },
    setZoneNumber(state, action: PayloadAction<number>) {
      state.uploadBoard.zoneNumber = action.payload;
    },
    setTitle(state, action: PayloadAction<string>) {
      state.uploadBoard.title = action.payload;
    },
    setContent(state, action: PayloadAction<string>) {
      state.uploadBoard.content = action.payload;
    },
    setPrice(state, action: PayloadAction<number>) {
      state.uploadBoard.price = action.payload;
    },
    setGuestCnt(state, action: PayloadAction<number>) {
      state.uploadBoard.guestCnt = action.payload;
    },
    setClearPrice(state) {
      state.uploadBoard.price = 0;
    },
    setClearGuestCnt(state) {
      state.uploadBoard.guestCnt = 0;
    },
    setClearTitle(state) {
      state.uploadBoard.title = "";
    },
    setClearContent(state) {
      state.uploadBoard.content = "";
    },
  },
});

export default boardSlice;
