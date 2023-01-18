import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { funcCreateBoard } from "../../api/boardApi";
import { useAppDispatch, useAppSelector } from "../../hooks/redux_hooks";
import { updateBoarderList } from "../../store/board.action";
import boardSlice from "../../store/board.slice";
import { StepFooterStyle } from "../../styles/stepFooterStyle";

export default function StepFooter() {
	const step = useAppSelector(state => state.step.currentStep);
	const prevLocate = useAppSelector(state => state.step.prevLocate);
	const nextLocate = useAppSelector(state => state.step.nextLocate);
	const totalStep = useAppSelector(state => state.step.totalStep);
	const currentLocate = useAppSelector(state => state.step.currentLocate);
	const dispatch = useAppDispatch();

	//upload state item;
	const location = useAppSelector(state => state.board.uploadBoard.location);
	const locationDetail = useAppSelector(
		state => state.board.uploadBoard.locationDetail
	);
	const zoneNumber = useAppSelector(
		state => state.board.uploadBoard.zoneNumber
	);
	const title = useAppSelector(state => state.board.uploadBoard.title);
	const content = useAppSelector(state => state.board.uploadBoard.content);
	const isOutdoor = useAppSelector(state => state.board.uploadBoard.isOutdoor);

	const guestCnt = useAppSelector(state => state.board.uploadBoard.guestCnt);
	const price = useAppSelector(state => state.board.uploadBoard.price);
	// post page count

	const navigator = useNavigate();

	const prevClickHandle = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		switch (currentLocate) {
			case "/become-host/type":
				break;
			case "/become-host/position":
				dispatch(boardSlice.actions.clearUploadBoard());
				break;

			case "/become-hos/guest":
				dispatch(boardSlice.actions.setClearPrice());
				dispatch(boardSlice.actions.setClearGuestCnt());
				break;

			case "/become-hos/description":
				dispatch(boardSlice.actions.setClearTitle());
				dispatch(boardSlice.actions.setClearContent());
				break;
		}
	};

	const nextClickHandle = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		switch (currentLocate) {
			case "/become-host/type":
				break;
			case "/become-host/position":
				if (!location || !zoneNumber || !locationDetail) {
					alert("주소를 다 입력해주세요");
					e.preventDefault();
				}
				break;
			case "/become-host/guest":
				if (guestCnt === 0 || price === 0) {
					alert("필요 게스트 인원 및 가격을 다 입력해주세요");
					e.preventDefault();
				}

				if (guestCnt > 100 || price > 1000000) {
					alert(
						"게스트는 100명 이상, 회원비는 100백만원 이상 작성 할 수 없습니다."
					);
					e.preventDefault();
				}
				break;
			case "/become-host/description":
				if (!title || !content) {
					alert("제목과 게시물 내용을 다 입력해주세요.");
					e.preventDefault();
				} else {
					// const userId = new Cookies().get("login_user");
					const userId = sessionStorage.getItem("login_user");
					if (!userId) return;
					const ret = await funcCreateBoard({
						title,
						content,
						location,
						locationDetail,
						zoneNumber,
						writerId: userId,
						guestCnt,
						price,
						isOutdoor,
					});
					if (ret) {
						dispatch(boardSlice.actions.clearUploadBoard());
						dispatch(updateBoarderList());
						navigator("/become-host/success");
					} else {
						navigator("/become-host/fail");
					}
				}
				break;
		}
	};

	return (
		<StepFooterStyle>
			<div className="step_bar_container">
				<div className="step_bar">
					<div
						className="now_progress"
						style={{
							transition: "transform 600ms linear .2s",
							transform: `translateX(${(100 / totalStep) * step}%)`,
						}}
					></div>
				</div>
			</div>
			<div className="step_bar_btn_container">
				<Link
					className="step_backward"
					to={prevLocate}
					onClick={prevClickHandle}
				>
					뒤로
				</Link>
				<Link
					className="step_forward"
					to={nextLocate}
					onClick={nextClickHandle}
				>
					{step === 3 ? "완료" : "다음"}
				</Link>
			</div>
		</StepFooterStyle>
	);
}
