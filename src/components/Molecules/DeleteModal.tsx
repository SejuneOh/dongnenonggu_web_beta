import React from "react";
import { useNavigate } from "react-router-dom";
import { funcDeleteBoardById } from "../../api/board.api";
import { useAppDispatch } from "../../hooks/redux_hooks";
import { updateBoarderList } from "../../store/board.action";
import { DeleteModalStyle } from "../../styles/deleteModalStyle";
import DefaultButton from "../Atoms/DefaultButton";

interface Props {
  boardId: number;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DeleteModal({ setActive, boardId }: Props) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onDeleteClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const ret = await funcDeleteBoardById(boardId);

    if (true) {
      dispatch(updateBoarderList());
      navigate("/post");
    }
  };
  return (
    <DeleteModalStyle>
      <div className="delete_wallpaper" onClick={(e) => setActive(false)}></div>
      <div className="delete_modal">
        <header>삭제</header>
        <div className="">정말 삭제 하시겠습니까?</div>
        <div className="button_wrapper">
          <DefaultButton
            color="blue"
            text="취소"
            onClick={(e) => setActive(false)}
          />
          <DefaultButton color="red" text="삭제" onClick={onDeleteClick} />
        </div>
      </div>
    </DeleteModalStyle>
  );
}
