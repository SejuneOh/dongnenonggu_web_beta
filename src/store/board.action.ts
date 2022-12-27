import boardSlice from "./board.slice";

const actions = boardSlice.actions;

const funcSomething = () => {
  return (dispatch: any, getState: any) => {
    // do something
    return;
  };
};

export default { funcSomething };
