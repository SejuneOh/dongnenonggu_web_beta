import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Board } from "../../model/board.model";
import PostDescriptionDiv from "../Molecules/PostCard/PostDescriptionDiv";
import UserDescriptionDiv from "../Molecules/PostCard/UserDescriptionDiv";

interface Props {
  board: Board;
}

const PostCardStyle = styled.div`
  width: 360px;
  border: 2px solid var(--light-gray);
  border-radius: 10px;
  padding: 1rem 2rem;
  margin: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const PostCard: React.FC<Props> = ({ board }) => {
  const navigator = useNavigate();

  const onClickPostCardHandle = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    navigator(`/article/${board.boardNo}`);
  };

  return (
    <PostCardStyle onClick={onClickPostCardHandle}>
      <PostDescriptionDiv
        createAt={board.createAt?.toString()}
        title={board.title}
        description={board.content}
        isOutdoor={board.isOutdoor}
      />
      <UserDescriptionDiv
        nickName={board.writerName}
        position={board.location}
      />
    </PostCardStyle>
  );
};

export default PostCard;
