import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostPageTemplate from "../components/Templates/PostPageTemplate";
import { useAppDispatch, useAppSelector } from "../hooks/redux_hooks";
import { funcClearPageNum, getPostListData } from "../store/postAction";

const PostPageStyle = styled.section`
  margin: 6rem 8rem 0 8rem;
  padding-top: 3rem;
  width: 1100px;
  margin: 6rem auto;
`;

export default function PostPage() {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.post.page);
  const count = useAppSelector((state) => state.post.count);

  useEffect(() => {
    // 초기화.
    dispatch(funcClearPageNum());
    // 18개만 불러온다.
    dispatch(getPostListData(page, count));
  }, []);

  return (
    <PostPageStyle>
      <PostPageTemplate />
    </PostPageStyle>
  );
}
