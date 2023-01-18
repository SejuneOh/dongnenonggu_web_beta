import { Comment } from "../../model/commentModel";
import account from "../../assets/account.svg";
import vert from "../../assets/vert.svg";
import DefaultButton from "../Atoms/DefaultButton";
import { UserCommentStyle } from "../../styles/userCommentStyle";

interface Props {
	comment: Comment;
}

export default function UserComment({ comment }: Props) {
	return (
		<UserCommentStyle>
			<div className="user_comment_header">
				<div className="user_comment_name">
					<img src={account} alt="avator" />
					<span>{comment.writerName}</span>
					<span>
						{new Intl.DateTimeFormat().format(new Date(comment.createAt))}
					</span>
				</div>
				<img src={vert} alt="vert" />
			</div>
			<div className="user_comment_content">
				<article>{comment.content}</article>
			</div>
			<div className="user_comment_footer">
				<DefaultButton
					style={{ width: "50px", height: "40px" }}
					color="green"
					text="답글"
				/>
			</div>
		</UserCommentStyle>
	);
}
