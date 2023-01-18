import { forwardRef } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/reduxHooks";
import { PostRegisterTitle } from "../Templates/PostRegisterTemplate";

const EditTitleStyle = styled.div`
	& > input {
		box-sizing: border-box;
		width: 100%;
		padding: 0.5rem;
	}
`;

interface Props {
	boardNo: number;
}

export type Ref = HTMLInputElement;

const EditTitle = forwardRef<Ref, Props>(({ boardNo }: Props, ref) => {
	const board = useAppSelector(state =>
		state.board.boardList.find(doc => doc.boardNo === boardNo)
	);

	return (
		<EditTitleStyle>
			<PostRegisterTitle className="edit_sub_title " text="제목" />
			{board && <input type="text" ref={ref} defaultValue={board?.title} />}
		</EditTitleStyle>
	);
});

export default EditTitle;
