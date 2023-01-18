import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import GuestMapTitle from "../components/Atoms/GuestPage/GuestMapTitle";
import TitleUnderLine from "../components/Atoms/GuestPage/TitleUnderLine";
import { useAppSelector } from "../hooks/reduxHooks";
import { Board } from "../model/board.model";

export interface ComponentProps {
	board: Board;
}

interface TitleProps {
	title: string;
	boardNo: string;
}

const MakePostItemStyle = styled.div`
	margin-top: 1rem;
	padding: 1rem;
`;

export const makePostItem = <T extends ComponentProps>(
	Commponent: React.FC<T>
): React.FC<TitleProps & Omit<T, keyof ComponentProps>> => {
	const PostItem = ({ boardNo, title, ...props }: TitleProps) => {
		const boardList = useAppSelector(state => state.board.boardList);
		const [board, setBoard] = useState<Board>();

		useEffect(() => {
			const _board = boardList.find(doc => doc.boardNo === parseInt(boardNo));
			setBoard(_board);
		}, [boardList]);

		return (
			<>
				{board ? (
					<MakePostItemStyle>
						<GuestMapTitle text={title} />
						<TitleUnderLine />
						<Commponent {...(props as T)} board={board} />
					</MakePostItemStyle>
				) : null}
			</>
		);
	};

	return PostItem;
};
