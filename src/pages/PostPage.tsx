import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostPageTemplate from "../components/Templates/PostPageTemplate";
import { useAppDispatch, useAppSelector } from "../hooks/redux_hooks";

const PostPageStyle = styled.section`
  margin: 6rem 8rem 0 8rem;
  padding-top: 3rem;
  width: 1100px;
  margin: 6rem auto;
`;

export default function PostPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // 초기화.
  }, []);

  return (
    <PostPageStyle>
      <PostPageTemplate />
    </PostPageStyle>
  );
}
