import stepSlice from "./stepSlice";

const stepActions = stepSlice.actions;

export const funcSetCurrentLocate = (location: string) => {
  return (dispatch: any, getState: any) => {
    // 현재 위치 저장
    dispatch(stepActions.setCurrentLocate(location));

    // 위치에 따른 다음 스텝 옵션
    switch (location) {
      case "/become-host/type":
        dispatch(stepActions.setNextLocate("/become-host/position"));
        dispatch(stepActions.setPrevLocate("/post"));
        dispatch(stepActions.setCurrentStep(1));
        break;

      case "/become-host/position":
        dispatch(stepActions.setNextLocate("/become-host/guest"));
        dispatch(stepActions.setPrevLocate("/become-host/type"));
        dispatch(stepActions.setCurrentStep(2));
        break;
      case "/become-host/guest":
        dispatch(stepActions.setNextLocate("/become-host/description"));
        dispatch(stepActions.setPrevLocate("/become-host/position"));
        dispatch(stepActions.setCurrentStep(3));

        break;
      case "/become-host/description":
        dispatch(stepActions.setPrevLocate("/become-host/guest"));
        dispatch(stepActions.setCurrentStep(4));
        break;
    }
  };
};
