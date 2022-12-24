import React from "react";
import refreshIcon from "../../assets/refresh.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux_hooks";
import { funcUpdateList } from "../../store/postAction";
import { PostUpdateBtnStyle } from "../../styles/PostUpdateBtnStyle";

export default function PostUpdateBtn() {
  const dispatch = useAppDispatch();

  return (
    <PostUpdateBtnStyle
      onClick={(e) => {
        dispatch(funcUpdateList());
      }}
    >
      <img src={refreshIcon} alt="refreshIcon" />
      업데이트
    </PostUpdateBtnStyle>
  );
}
