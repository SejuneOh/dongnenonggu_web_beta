import React, { HTMLAttributes, useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { getBoardComment } from "../../api/comment.api";
import { GuestDescriptionStyle } from "../../styles/guestDescriptionStyle";
import GuestMapTitle from "../Atoms/GuestPage/GuestMapTitle";
import TitleUnderLine from "../Atoms/GuestPage/TitleUnderLine";
import Comment from "../Molecules/GuestPage/Comment";
import GuestQnAModal from "./GuestQnAModal";

interface GuestDescriptionProps extends HTMLAttributes<HTMLDivElement> {
  nickName: string;
  description: string | undefined;
  guestCnt: number | undefined;
  writerId: string;
  boardNo: string;
  price: number | undefined;
}

export default function GuestDescription({
  nickName,
  description,
  price,
  guestCnt,
  writerId,
  boardNo,
  ...props
}: GuestDescriptionProps) {
  const [isActiveQnAModal, setIsActiveQnAModal] = useState<boolean>(false);
  const cookie = new Cookies();

  const qnaBtnClickHandle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsActiveQnAModal(true);
  };

  useEffect(() => {
    getBoardComment(boardNo);
  }, []);

  return (
    <GuestDescriptionStyle {...props}>
      <GuestMapTitle
        style={{
          marginTop: "3rem",
        }}
        text="호스트"
      />
      <TitleUnderLine />

      <div className="guest_host_description_container">
        <span>{`오늘의 호스트 ${nickName}님이 당신을 농구에 초대합니다.`}</span>
      </div>
      <GuestMapTitle
        style={{
          marginTop: "3rem",
        }}
        text="게스트 및 비용"
      />
      <TitleUnderLine />
      <div className="guest_info">
        <span>구하는 게스트 인원: {guestCnt}명</span>
        <span>
          1인 게스트 비용:{" "}
          {new Intl.NumberFormat("ko-KR", {
            style: "currency",
            currency: "KRW",
          }).format(price ? price : 0)}
        </span>
      </div>

      <div className="guest_main_description_container">
        <GuestMapTitle
          style={{
            marginTop: "3rem",
          }}
          text="오늘의 농구장 설명"
        />
        <TitleUnderLine />
        <p style={{ marginTop: "2rem" }}>{description}</p>
      </div>
      <div className="guest_qna_container">
        <div>
          <GuestMapTitle text="Q&A" />
          <TitleUnderLine />
        </div>
        {writerId !== cookie.get("login_user") && (
          <button
            style={{
              color: "white",
              border: "0",
              width: "100px",
              height: "40px",
              borderRadius: "10px",
              backgroundColor: "#328EEF",
              cursor: "pointer",
            }}
            onClick={qnaBtnClickHandle}
          >
            질문하기
          </button>
        )}
      </div>
      <div className="guest_qna_comment_container">
        <Comment />
      </div>
      {isActiveQnAModal ? (
        <GuestQnAModal isActiveDispatch={setIsActiveQnAModal} />
      ) : null}
    </GuestDescriptionStyle>
  );
}
