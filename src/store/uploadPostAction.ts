import uploadSlice from "./UploadPostSlice";

const action = uploadSlice.actions;

export const clearUploadPost = () => {
  return (dispatch: any, getState: any) => {
    dispatch(action.clearState());
  };
};

export const setAddress = (_address: string) => {
  return (dispatch: any, getState: any) => {
    dispatch(action.setAddress(_address));
  };
};
export const delAddress = () => {
  return (dispatch: any, getState: any) => {
    dispatch(action.delAddress());
  };
};

export const setZoneNumber = (_zoneNumber: string) => {
  return (dispatch: any, getState: any) => {
    dispatch(action.setZoneNumber(_zoneNumber));
  };
};

export const delZoneNumber = () => {
  return (dispatch: any, getState: any) => {
    dispatch(action.delZoneNumber());
  };
};

export const setAddressDetail = (_addressDetail: string) => {
  return (dispatch: any, getState: any) => {
    dispatch(action.setAddressDetail(_addressDetail));
  };
};
export const delAddressDetail = () => {
  return (dispatch: any, getState: any) => {
    dispatch(action.delAddressDetail());
  };
};

export const setTitle = (_title: string) => {
  return (dispatch: any, getState: any) => {
    dispatch(action.setBoardTitle(_title));
  };
};

export const delTitle = () => {
  return (dispatch: any, getState: any) => {
    dispatch(action.delBoardTitle());
  };
};

export const setContent = (_contents: string) => {
  return (dispatch: any, state: any) => {
    dispatch(action.setBoardContent(_contents));
  };
};

export const delCotents = () => {
  return (dispatch: any, state: any) => {
    dispatch(action.delBoardCotent());
  };
};
