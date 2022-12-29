import refreshIcon from "../../assets/refresh.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux_hooks";
import { updateBoarderList } from "../../store/board.action";
import { PostUpdateBtnStyle } from "../../styles/PostUpdateBtnStyle";

export default function PostUpdateBtn() {
  const dispatch = useAppDispatch();

  return (
    <PostUpdateBtnStyle
      onClick={(e) => {
        dispatch(updateBoarderList());
      }}
    >
      <img src={refreshIcon} alt="refreshIcon" />
      업데이트
    </PostUpdateBtnStyle>
  );
}
