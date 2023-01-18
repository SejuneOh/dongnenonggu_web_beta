import { forwardRef } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/reduxHooks";
import { PostRegisterTitle } from "../Templates/PostRegisterTemplate";

interface Props {
	boardNo: number;
}

export type Ref = HTMLInputElement;

const EditGuestCntStyle = styled.div`
	input[type="number"]::-webkit-outer-spin-button,
	input[type="number"]::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.edit_guest_wrapper {
		line-height: 0.4rem;
		& > input {
			padding: 0.2rem;
			margin-right: 1rem;
		}
	}
`;

const EditGuestCnt = forwardRef<Ref, Props>(({ boardNo }: Props, ref) => {
	const board = useAppSelector(state =>
		state.board.boardList.find(doc => doc.boardNo === boardNo)
	);

	return (
		<EditGuestCntStyle>
			<PostRegisterTitle className="edit_sub_title " text="게스트 인원" />
			<div className="edit_guest_wrapper">
				<input type="number" ref={ref} defaultValue={board?.guestCnt} />
				<span>명</span>
			</div>
		</EditGuestCntStyle>
	);
});

export default EditGuestCnt;
