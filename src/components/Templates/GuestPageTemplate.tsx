import styled from "styled-components";
import { useAppSelector } from "../../hooks/redux_hooks";
import GuestMap from "../Molecules/GuestPage/GuestMap";
import GuestDescription from "../Organisms/GuestDescription";

interface Props {
  id: string;
}

const GuestPageTemplateStyle = styled.div`
  padding: 1rem;

  .post_detail_title {
    font-size: 40px;
    margin-bottom: 5rem;
  }
`;

export default function GuestPageTemplate({ id }: Props) {
  const board = useAppSelector((state) =>
    state.board.boardList.find((el) => el.boardNo === parseInt(id))
  );

  return (
    <GuestPageTemplateStyle>
      {/* title */}
      {board ? (
        <>
          <h1 className="post_detail_title">{board.title}</h1>
          {/* <GuestMap location={board.address ? currentPost.address : ""} /> */}
          <GuestMap
            address={board.location}
            addressDetail={board.locationDetail}
            zoneNumber={board.zoneNumber}
          />
          <GuestDescription
            nickName={board.writerName ? board.writerName : "동농"}
            description={board.content}
          />
        </>
      ) : (
        <div>게시물이 없습니다.</div>
      )}
    </GuestPageTemplateStyle>
  );
}
