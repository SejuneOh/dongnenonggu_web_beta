import React, { ChangeEvent, HTMLAttributes, useState } from "react";
import cancelIcon from "../../../assets/cancelLight.png";
import { GuestQnACardStyle } from "../../../styles/guestQnAStyle";

interface GuestQnACardProps extends HTMLAttributes<HTMLDivElement> {
  isActiveDispatch: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function GuestQnACard({
  isActiveDispatch,
  ...props
}: GuestQnACardProps) {
  const [charLength, setCharLength] = useState<number>(0);

  const textAreaChangeHandle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharLength(e.target.textLength);
  };
  return (
    <GuestQnACardStyle {...props}>
      <div className="qna_modal_title_wrapper">
        <h3>질문하기</h3>
        <img
          src={cancelIcon}
          alt="cancelImg"
          onClick={(e) => isActiveDispatch(false)}
        />
      </div>
      <div className="qna_modal_input_wrapper">
        <div className="qna_modal_input_title_wrapper">
          <span>질문</span>
          <span>{charLength}/200</span>
        </div>
        <textarea
          placeholder="호스트에게 궁금한점을 질문하세요."
          onChange={textAreaChangeHandle}
        />
        <p className="qna_modal_alert">
          @게스트 예약 및 농구 문의가 아닌 글은 무통보 삭제될 수 있습니다.
        </p>
      </div>
      <div className="qna_modal_btn_wrapper">
        <button
          className="qna_modal_btn_cancle"
          onClick={(e) => isActiveDispatch(false)}
        >
          취소
        </button>
        <button className="qna_modal_btn_submit">등록</button>
      </div>
    </GuestQnACardStyle>
  );
}
