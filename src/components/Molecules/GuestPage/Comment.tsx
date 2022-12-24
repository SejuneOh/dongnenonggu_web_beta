import { HTMLAttributes, useState } from "react";
import styled from "styled-components";
import { commentDummy, ICommnet } from "../../../dummy/Data";
import avtarIcon from "../../../assets/account.svg";

const CommentStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid var(--light-gray);

  & > img {
    width: 40px;
    margin-right: 1rem;
  }
`;

export default function Comment() {
  const [comment, setComment] = useState<ICommnet>(commentDummy);

  return (
    <CommentStyle>
      <img src={avtarIcon} alt="" />
      <div className="comment_question_wrapper">
        <CommentDiv
          creatAt={comment.creatAt}
          nickName={comment.nickName}
          text={comment.text}
          isHost={false}
        />
        <CommentDiv
          creatAt={comment.host.createAt}
          nickName={comment.host.nickName}
          text={comment.host.text}
          isHost={true}
        />
      </div>
    </CommentStyle>
  );
}

interface CommentDivProps extends HTMLAttributes<HTMLDivElement> {
  isHost: boolean;
  nickName: string;
  text: string;
  creatAt: string;
}

const CommentDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;

  .comment_nickname {
    font-size: 18px;

    &.blue {
      color: var(--blue);
    }
  }

  .comment_desription {
    font-size: 1rem;
    color: var(--gray);
  }

  .comment_createAt {
    color: var(--light-gray);
    font-size: 14px;
  }
`;
const CommentDiv: React.FC<CommentDivProps> = ({
  nickName,
  text,
  creatAt,
  isHost,
  ...props
}) => {
  return (
    <CommentDivStyle {...props}>
      <span className={isHost ? "comment_nickname blue" : "comment_nickname"}>
        {nickName}의 답글
      </span>
      <span className="comment_desription">{text}</span>
      <span className="comment_createAt">{creatAt}</span>
    </CommentDivStyle>
  );
};
