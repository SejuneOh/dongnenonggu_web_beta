import React, { useEffect } from "react";
import { PostRegisterTitle } from "../components/Templates/PostRegisterTemplate";
import { useAppDispatch, useAppSelector } from "../hooks/redux_hooks";
import boardSlice from "../store/board.slice";
import { funcSetCurrentLocate } from "../store/stepAction";
import { PostGuestAndPricePageStyle } from "../styles/postGuestAndPageStyle";

export default function PostGuestAndPricePage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const inputs = document.querySelectorAll(".guest_input");

    inputs.forEach((element) => {
      element.addEventListener("wheel", (event) => {
        event.preventDefault();
      });
    });

    dispatch(funcSetCurrentLocate(location.pathname));
  }, []);

  const priceOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(boardSlice.actions.setPrice(parseInt(e.target.value)));
  };
  const guestCntOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(boardSlice.actions.setGuestCnt(parseInt(e.target.value)));
  };
  return (
    <PostGuestAndPricePageStyle>
      <div className="tempalte">
        <PostRegisterTitle text="요금 및 게스트 인원" />
        <div className="guest_container">
          <p className="guest_title">필요 게스트 수를 입력해주세요.</p>
          <div className="cnt_wrapper">
            <input
              className="guest_input"
              type="number"
              id="guetCnt"
              onChange={guestCntOnChange}
            />
            <span>명</span>
          </div>
        </div>
        <div className="guest_container">
          <p className="guest_title">게스트 비용을 입력해주세요.</p>
          <div className="cnt_wrapper">
            <input
              className="guest_input"
              type="number"
              id="guetCnt"
              onChange={priceOnChange}
            />
            <span>원</span>
          </div>
        </div>
        <p className="warn">
          @과도한 게스타 사용자 및 요금의 대한 게시글은 삭제할 수 있습니다.
        </p>
      </div>
    </PostGuestAndPricePageStyle>
  );
}
