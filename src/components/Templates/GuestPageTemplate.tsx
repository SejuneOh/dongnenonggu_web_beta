import React, { useState } from "react";
import { Cookies } from "react-cookie";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/redux_hooks";
import DefaultButton from "../Atoms/DefaultButton";
import DeleteModal from "../Molecules/DeleteModal";
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

  .post_update_delete_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    gap: 1rem;
  }
`;

export default function GuestPageTemplate({ id }: Props) {
  const board = useAppSelector((state) =>
    state.board.boardList.find((el) => el.boardNo === parseInt(id))
  );

  const loginUser = new Cookies().get("login_user");
  const [isActive, setIsActive] = useState<boolean>(false);

  const onDeleteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsActive(true);
  };

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
            price={board.price}
            guestCnt={board.guestCnt}
          />
          {board.writerId === loginUser && (
            <div className="post_update_delete_wrapper">
              <DefaultButton color="blue" text="수정" />
              <DefaultButton color="red" text="삭제" onClick={onDeleteClick} />
              {isActive && (
                <DeleteModal boardId={parseInt(id)} setActive={setIsActive} />
              )}
            </div>
          )}
        </>
      ) : (
        <div>게시물이 없습니다.</div>
      )}
    </GuestPageTemplateStyle>
  );
}
