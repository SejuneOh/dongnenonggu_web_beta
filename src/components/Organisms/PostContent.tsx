import React from "react";
import { ComponentProps, makePostItem } from "../../HoC/MakePostItem";

function PostContent({ board }: ComponentProps) {
  return (
    <div>
      <p>{board.content}</p>
    </div>
  );
}

export default makePostItem(PostContent);
