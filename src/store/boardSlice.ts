import { Board, createBoard } from "../model/boardModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitBoardSliceInterface {
	boardList: Array<Board>;
	uploadBoard: createBoard;
	limit: number;
	currentPage: number;
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
	limit: 12,
	currentPage: 0,
	totalBoard: 0,
	totalPages: 0,
};
const boardSlice = createSlice({
	name: "board",
	initialState: initState,
	reducers: {
		clearBoardList(state) {
			return (state = {
				...state,
				boardList: initState.boardList,
				currentPage: 0,
				totalPages: 0,
			});
		},
		clearUploadBoard(state) {
			Object.assign(state.uploadBoard, initState.uploadBoard);
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
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setTotalPages(state, action: PayloadAction<number>) {
			state.totalPages = action.payload;
		},
		setTotalBoards(state, action: PayloadAction<number>) {
			state.totalBoard = action.payload;
		},
		setBoardList(state, action: PayloadAction<Array<Board>>) {
			state.boardList = [...state.boardList, ...action.payload];
		},
		updateBoardItem(
			state,
			action: PayloadAction<{ id: number; property: string; value: any }>
		) {
			const newState: Array<Board> = [];

			Object.assign(newState, state.boardList);

			newState.map(doc => {
				if (doc.boardNo === action.payload.id) {
					doc[action.payload.property] = action.payload.value;
				}
				return doc;
			});

			state.boardList = newState;
		},
	},
});

export default boardSlice;
