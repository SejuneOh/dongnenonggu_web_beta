import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import styled from "styled-components";
import { funcCreateComment, getBoardComment } from "../../api/comment.api";
import { GroupComment } from "../../model/comment.model";
import DefaultButton from "../Atoms/DefaultButton";
import GuestMapTitle from "../Atoms/GuestPage/GuestMapTitle";
import TitleUnderLine from "../Atoms/GuestPage/TitleUnderLine";
import Comment from "./Comment";
import GuestQnAModal from "./GuestQnAModal";

interface Props {
  boardNo: string;
}

const PostQnAStyle = styled.div`
  padding: 1rem;
  margin-top: 1rem;

  .qna_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

function PostQnA({ boardNo }: Props) {
  const [comments, setComments] = useState<Array<GroupComment>>([]);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const loginUser = new Cookies().get("login_user");

  useEffect(() => {
    syncComment();
  }, []);

  async function syncComment() {
    const ret = await getBoardComment(boardNo);
    setComments(ret);
  }

  async function submitHandle(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    msg: string
  ) {
    alert(msg);
    const ret = await funcCreateComment(boardNo, loginUser, msg);

    if (ret) {
      syncComment();
      alert("댓글 등록 성공");
    } else {
      alert("댓글 등록 실패");
    }

    setIsModalActive(false);
  }
  return (
    <PostQnAStyle>
      <div className="qna_header">
        <div className="qna_title">
          <GuestMapTitle text="QnA" />
          <TitleUnderLine />
        </div>
        <DefaultButton
          color="blue"
          text="질문하기"
          onClick={(e) => setIsModalActive(true)}
        />
      </div>
      <div>
        {comments.length > 0 ? (
          <Comment comments={comments} />
        ) : (
          <>댓글이 없습니다.</>
        )}
      </div>
      {isModalActive && (
        <GuestQnAModal
          isActiveDispatch={setIsModalActive}
          submitHandle={submitHandle}
        />
      )}
    </PostQnAStyle>
  );
}

export default PostQnA;
