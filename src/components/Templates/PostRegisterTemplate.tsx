import React, {
	HTMLAttributes,
	HtmlHTMLAttributes,
	useCallback,
	useEffect,
} from "react";
import styled from "styled-components";
import RegisterOptionDiv from "../Molecules/RegisterOptionDiv";
import stardium from "../../assets/stadium.svg";
import backetball from "../../assets/basketballIcon.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { funcSetCurrentLocate } from "../../store/stepAction";
import boardSlice from "../../store/boardSlice";

const PostRegisterTemplateStyle = styled.div`
	max-width: 630px;
	margin: auto;
	height: 100%;
	.post_register_title {
		font-size: 40px;
		font-weight: 500;
		margin-bottom: 3rem;
	}
`;

export default function PostRegisterTemplate({
	...props
}: HTMLAttributes<HTMLDivElement>) {
	const dispatch = useAppDispatch();
	const isOutDoor = useAppSelector(state => state.board.uploadBoard.isOutdoor);

	useEffect(() => {
		// 현재 위치를 상태값으로 관리한다.
		dispatch(funcSetCurrentLocate(location.pathname));
		dispatch(boardSlice.actions.clearUploadBoard());
	}, []);

	const onChageMenu = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			console.log(e.currentTarget.id);

			const result = e.currentTarget.id === "outdoor" ? true : false;

			dispatch(boardSlice.actions.setIsOutdoor(result));
		},
		[isOutDoor]
	);

	return (
		<PostRegisterTemplateStyle {...props}>
			{/* 타이틀 */}
			<PostRegisterTitle
				style={{
					animationDelay: "400ms",
				}}
				text="게스트가 사용할 농구장 유형"
			/>
			<RegisterOptionDiv
				id="outdoor"
				mainText="야외 경기장"
				description="야외에서 게스트와 농구를 할 것 입니다."
				img={backetball}
				onClick={onChageMenu}
				style={
					isOutDoor
						? {
								border: "2px solid var(--black)",
						  }
						: {}
				}
			/>
			<RegisterOptionDiv
				id="indoor"
				mainText="실내 경기장"
				description="실내에서 게스트와 농구를 할 것 입니다."
				img={stardium}
				onClick={onChageMenu}
				style={
					!isOutDoor
						? {
								border: "2px solid var(--black)",
						  }
						: {}
				}
			/>
		</PostRegisterTemplateStyle>
	);
}

const PostRegisterTitleStyle = styled.div`
	font-size: 40px;
	font-weight: 500;
	margin-bottom: 3rem;
	/* animation */
	/* animation-delay: ;  엘리먼트가 로드되고 나서 언제 애니메이션 시작될지 지정합니다. */
	/* animation-direction: ;   애니메이션이 종료되고 다시 처음부터 시작할지 역방향으로 진행할지 지정합니다.*/
	animation-name: listAnimation; // 이 애니메이션의 주간 상태를 지정합니다. 중간 상태는 @keyframe 규칠을 이용하여 기술합니다.
	animation-duration: 600ms; //한 사이클의 애니메이션이 얼마에 걸쳐 일어날지 지정합니다.
	animation-iteration-count: 1; // 애니메이션이 몇 번 반복될지 지정합니다. infinite 는 무한이 반복할 수 있습니다.
	animation-fill-mode: both; //애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정합니다.

	@keyframes listAnimation {
		0% {
			opacity: 0;
			transform: translate3d(0, 100%, 0);
		}
		to {
			opacity: 1;
			transform: translateZ(0);
		}
	}
`;

interface PostRegisterTitleProps extends HtmlHTMLAttributes<HTMLDivElement> {
	text: string;
}

export const PostRegisterTitle: React.FC<PostRegisterTitleProps> = ({
	text,
	...props
}) => {
	return (
		<PostRegisterTitleStyle {...props}>
			<h2>{text}</h2>
		</PostRegisterTitleStyle>
	);
};
