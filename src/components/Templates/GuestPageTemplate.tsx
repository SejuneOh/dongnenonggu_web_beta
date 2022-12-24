import styled from "styled-components";
import { useAppSelector } from "../../hooks/redux_hooks";
import GuestMap from "../Molecules/GuestPage/GuestMap";
import GuestDescription from "../Organisms/GuestDescription";

const GuestPageTemplateStyle = styled.div`
  padding: 1rem;

  .post_detail_title {
    font-size: 40px;
    margin-bottom: 5rem;
  }
`;

export default function GuestPageTemplate() {
  const currentPost = useAppSelector((state) => state.post.currentPost);

  return (
    <GuestPageTemplateStyle>
      {/* title */}
      {currentPost ? (
        <>
          <h1 className="post_detail_title">{currentPost.boardTitle}</h1>
          {/* <GuestMap location={currentPost.address ? currentPost.address : ""} /> */}
          <GuestMap
            address={currentPost.address}
            addressDetail={currentPost.addressDetail}
            zoneNumber={currentPost.zoneNumber}
          />
          <GuestDescription
            nickName={
              currentPost.userNickName ? currentPost.userNickName : "동농"
            }
            description={currentPost.bordContent}
          />
        </>
      ) : (
        <div>게시물이 없습니다.</div>
      )}
    </GuestPageTemplateStyle>
  );
}
