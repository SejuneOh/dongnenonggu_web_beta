import React, { forwardRef, useEffect } from "react";
import styled from "styled-components";
import RegisterOptionDiv from "../Molecules/RegisterOptionDiv";
import { PostRegisterTitle } from "../Templates/PostRegisterTemplate";
import backetball from "../../assets/basketballIcon.svg";
import stardium from "../../assets/stadium.svg";
import { useAppSelector } from "../../hooks/reduxHooks";
interface Props {
	boardNo: number;
	isOutDoor: boolean;
	setInitOutDoor: React.Dispatch<React.SetStateAction<boolean>>;
	onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export type Ref = HTMLDivElement;

const EditTypeStyle = styled.div`
	.type_wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
	.edit_type {
		animation: none;
		box-sizing: border-box;
	}
`;

const EditType = ({ boardNo, isOutDoor, setInitOutDoor, onClick }: Props) => {
	const selectedTyped = useAppSelector(state =>
		state.board.boardList.find(el => el.boardNo === boardNo)
	)?.isOutdoor;

	useEffect(() => {
		setInitOutDoor(selectedTyped ?? true);
	}, []);
	return (
		<EditTypeStyle>
			<PostRegisterTitle className="edit_sub_title " text="경기장 타입" />
			<div className="type_wrapper">
				<RegisterOptionDiv
					style={isOutDoor ? { border: "2px solid black" } : {}}
					className="edit_type"
					id="outdoor"
					mainText="야외 경기장"
					description="야외에서 게스트와 농구를 할 것 입니다."
					img={backetball}
					onClick={onClick}
				/>
				<RegisterOptionDiv
					id="indoor"
					style={!isOutDoor ? { border: "2px solid black" } : {}}
					mainText="실내 경기장"
					description="실내에서 게스트와 농구를 할 것 입니다."
					img={stardium}
					onClick={onClick}
				/>
			</div>
		</EditTypeStyle>
	);
};

export default EditType;
