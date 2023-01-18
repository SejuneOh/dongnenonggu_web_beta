import { Comment } from "../../model/commentModel";
import arrow from "../../assets/subdirector.svg";
import account from "../../assets/account.svg";
import vert from "../../assets/vert.svg";
import { ReplyCommentStyle } from "../../styles/replyStyle";

interface Props {
	comment: Comment;
}

export default function ReplyComment({ comment }: Props) {
	return (
		<ReplyCommentStyle>
			<div className="reply_wrapper">
				<img src={arrow} alt="img" />
			</div>
			<div className="reply_container">
				<div className="reply_header">
					<div className="reply_name">
						<img src={account} alt="avator" />
						<span>{comment.writerName}</span>
						<span>
							{new Intl.DateTimeFormat().format(new Date(comment.createAt))}
						</span>
					</div>
					<img src={vert} alt="vert" />
				</div>
				<div className="reply_content">
					<article>{comment.content}</article>
				</div>
			</div>
		</ReplyCommentStyle>
	);
}
