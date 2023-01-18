import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks/reduxHooks";
import boardSlice from "../../store/board.slice";
import { funcSetCurrentLocate } from "../../store/stepAction";
import { PostRegisterTitle } from "./PostRegisterTemplate";

const PostArticleTemplateStyle = styled.div`
	max-width: 630px;
	margin: auto;
	height: 100%;
	animation-name: listAnimation; // 이 애니메이션의 주간 상태를 지정합니다. 중간 상태는 @keyframe 규칠을 이용하여 기술합니다.
	animation-duration: 600ms; //한 사이클의 애니메이션이 얼마에 걸쳐 일어날지 지정합니다.
	animation-iteration-count: 1; // 애니메이션이 몇 번 반복될지 지정합니다. infinite 는 무한이 반복할 수 있습니다.
	animation-fill-mode: both; //애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정합니다.

	.article_title_container {
		& > input {
			width: 100%;
			padding: 0.5rem;
			border-radius: 10px;
		}

		margin-bottom: 2rem;
	}

	.article_description_container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		& > textarea {
			width: 100%;
			height: calc(100vh * 0.2);
			resize: none;
			margin-bottom: 20px;
			border-radius: 10px;
			padding: 0.5rem;
		}

		& > span {
			color: var(--red);
			font-size: 1rem;
			font-weight: 700;
		}
	}
`;
export default function PostArticleTemplate() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(funcSetCurrentLocate(location.pathname));
	}, []);
	return (
		<PostArticleTemplateStyle>
			<PostRegisterTitle
				style={{
					animationDelay: "400ms",
				}}
				text="게시글 내용을 작성해주세요"
			/>
			<div className="article_title_container">
				<PostRegisterTitle
					style={{
						animationDelay: "400ms",
						fontSize: "1.8rem",
						fontWeight: "500",
						marginBottom: "1rem",
					}}
					text="제목"
				/>
				<input
					type="text"
					onChange={e => {
						dispatch(boardSlice.actions.setTitle(e.target.value));
					}}
				/>
			</div>
			<div className="article_description_container">
				<PostRegisterTitle
					style={{
						animationDelay: "400ms",
						fontSize: "1.8rem",
						fontWeight: "400",
						marginBottom: "1rem",
					}}
					text="게스트 내용"
				/>
				<textarea
					name=""
					id=""
					onChange={e => {
						dispatch(boardSlice.actions.setContent(e.target.value));
					}}
				></textarea>
				<span id="warn">
					@ 농구, 게스트 내용이 아닌 부적절한 내용의 게시물은 통보 없이
					삭제됩니다.
				</span>
			</div>
		</PostArticleTemplateStyle>
	);
}
