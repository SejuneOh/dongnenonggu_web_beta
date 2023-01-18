import refreshIcon from "../../assets/refresh.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { updateBoarderList } from "../../store/boardAction";
import { PostUpdateBtnStyle } from "../../styles/PostUpdateBtnStyle";

export default function PostUpdateBtn() {
	const dispatch = useAppDispatch();

	return (
		<PostUpdateBtnStyle
			onClick={e => {
				dispatch(updateBoarderList());
			}}
		>
			<img src={refreshIcon} alt="refreshIcon" />
			업데이트
		</PostUpdateBtnStyle>
	);
}
