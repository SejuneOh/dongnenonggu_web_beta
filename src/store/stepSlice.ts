import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface IStep {
  currentLocate: string;
  nextLocate: string;
  prevLocate: string;
  currentStep: number;
  totalStep: number;
}

const initState: IStep = {
  currentLocate: "",
  nextLocate: "",
  prevLocate: "",
  currentStep: 1,
  totalStep: 3,
};

const stepSlice = createSlice({
  name: "step",
  initialState: initState,
  reducers: {
    setCurrentLocate(state, action: PayloadAction<string>) {
      state.currentLocate = action.payload;
    },
    setNextLocate(state, action: PayloadAction<string>) {
      state.nextLocate = action.payload;
    },
    setPrevLocate(state, action: PayloadAction<string>) {
      state.prevLocate = action.payload;
    },
    setCurrentStep(state, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
  },
});

export default stepSlice;
