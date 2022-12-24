import stepSlice from "./stepSlice";

const stepActions = stepSlice.actions;

export const funcSetCurrentLocate = (location: string) => {
  return (dispatch: any, getState: any) => {
    // 현재 위치 저장
    dispatch(stepActions.setCurrentLocate(location));

    // 위치에 따른 다음 스텝 옵션
    switch (location) {
      case "/post/register":
        dispatch(stepActions.setNextLocate("/post/position"));
        dispatch(stepActions.setPrevLocate("/post"));
        dispatch(stepActions.setCurrentStep(1));
        break;
      case "/post/position":
        dispatch(stepActions.setNextLocate("/post/article"));
        dispatch(stepActions.setPrevLocate("/post/register"));
        dispatch(stepActions.setCurrentStep(2));
        break;
      case "/post/article":
        dispatch(stepActions.setNextLocate("/post"));
        dispatch(stepActions.setPrevLocate("/post/position"));
        dispatch(stepActions.setCurrentStep(3));
        break;
    }
  };
};
