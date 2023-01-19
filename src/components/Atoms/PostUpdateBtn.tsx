import { HTMLAttributes } from "react";
import refreshIcon from "../../assets/refresh.svg";
import { PostUpdateBtnStyle } from "../../styles/PostUpdateBtnStyle";

export default function PostUpdateBtn<
	T extends HTMLAttributes<HTMLButtonElement>
>({ ...props }) {
	return (
		<PostUpdateBtnStyle {...(props as T)}>
			<img src={refreshIcon} alt="refreshIcon" />
			업데이트
		</PostUpdateBtnStyle>
	);
}
