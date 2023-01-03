import React from "react";
import { ComponentProps, makePostItem } from "../../HoC/MakePostItem";

function PostPriceAndGuest({ board }: ComponentProps) {
  return (
    <div>
      <p>{`1인 게스트 회비 : ${new Intl.NumberFormat("ko-kr", {
        style: "currency",
        currency: "KRW",
      }).format(board.price!)}`}</p>
      <p>{`필요 게스트 인원: ${board.guestCnt}명`}</p>
    </div>
  );
}

export default makePostItem(PostPriceAndGuest);
