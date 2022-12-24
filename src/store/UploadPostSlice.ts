import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UploadPostSliceInitInterface {
  boardTitle: string;
  boardContent: string;
  address: string;
  addressDetail: string;
  zoneNumber: string;
}

const initState: UploadPostSliceInitInterface = {
  boardTitle: "",
  boardContent: "",
  address: "",
  addressDetail: "",
  zoneNumber: "",
};

const uploadSlice = createSlice({
  name: "upload",
  initialState: initState,
  reducers: {
    clearState(state) {
      Object.assign(state, initState);
    },
    setBoardTitle(state, action: PayloadAction<string>) {
      state.boardTitle = action.payload;
    },
    delBoardTitle(state) {
      state.boardTitle = "";
    },
    setBoardContent(state, action: PayloadAction<string>) {
      state.boardContent = action.payload;
    },
    delBoardCotent(state) {
      state.boardContent = "";
    },
    setAddress(state, action: PayloadAction<string>) {
      state.address = action.payload;
    },
    delAddress(state) {
      state.address = "";
    },
    setAddressDetail(state, action: PayloadAction<string>) {
      state.addressDetail = action.payload;
    },
    delAddressDetail(state) {
      state.addressDetail = "";
    },
    setZoneNumber(state, action: PayloadAction<string>) {
      state.zoneNumber = action.payload;
    },
    delZoneNumber(state) {
      state.zoneNumber = "";
    },
  },
});

export default uploadSlice;
