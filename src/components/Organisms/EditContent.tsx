import { forwardRef } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/redux_hooks";
import { PostRegisterTitle } from "../Templates/PostRegisterTemplate";

interface Props {
  boardNo: number;
}

const EditContentStyle = styled.div`
  & > textarea {
    box-sizing: border-box;
    resize: none;
    height: 300px;
    width: 100%;
    padding: 0.5rem;
  }
`;

export type Ref = HTMLTextAreaElement;

const EditContent = forwardRef<Ref, Props>(({ boardNo }: Props, ref) => {
  const board = useAppSelector((state) =>
    state.board.boardList.find((doc) => doc.boardNo === boardNo)
  );
  return (
    <EditContentStyle>
      <PostRegisterTitle className="edit_sub_title " text="내용" />
      <textarea ref={ref} name="" defaultValue={board?.content}></textarea>
    </EditContentStyle>
  );
});

export default EditContent;
