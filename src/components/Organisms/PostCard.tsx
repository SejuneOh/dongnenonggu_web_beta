import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks/redux_hooks";
import { PostModel } from "../../model/postModel";
import PostDescriptionDiv from "../Molecules/PostCard/PostDescriptionDiv";
import UserDescriptionDiv from "../Molecules/PostCard/UserDescriptionDiv";

type TProps = {
  post: PostModel;
};

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

const PostCard: React.FC<TProps> = ({ post }) => {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();

  const onClickPostCardHandle = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    navigator(`/guest/${post.boardKey}`);
  };

  return (
    <PostCardStyle onClick={onClickPostCardHandle}>
      <PostDescriptionDiv
        createAt={post.createdDate}
        title={post.boardTitle}
        description={post.bordContent}
      />
      <UserDescriptionDiv
        nickName={post.userNickName}
        position={post.address}
      />
    </PostCardStyle>
  );
};

export default PostCard;
