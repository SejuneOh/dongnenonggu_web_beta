import stepSlice from "./stepSlice";

const stepActions = stepSlice.actions;

export const funcSetCurrentLocate = (location: string) => {
  return (dispatch: any, getState: any) => {
    // 현재 위치 저장
    dispatch(stepActions.setCurrentLocate(location));

    // 위치에 따른 다음 스텝 옵션
    switch (location) {
      case "/postregist/type":
        dispatch(stepActions.setNextLocate("/postregist/position"));
        dispatch(stepActions.setPrevLocate("/post"));
        dispatch(stepActions.setCurrentStep(1));
        break;
      case "/postregist/position":
        dispatch(stepActions.setNextLocate("/postregist/description"));
        dispatch(stepActions.setPrevLocate("/postregist/type"));
        dispatch(stepActions.setCurrentStep(2));
        break;
      case "/postregist/description":
        dispatch(stepActions.setPrevLocate("/postregist/position"));
        dispatch(stepActions.setCurrentStep(3));
        break;
    }
  };
};
