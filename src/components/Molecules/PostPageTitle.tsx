import React from "react";
import styled from "styled-components";

const PostPageTitleStyle = styled.div`
  margin-bottom: 35px;
  .post_page_title {
    font-size: 40px;
    font-weight: 700;
  }

  .post_page_dsc {
    display: block;
    font-size: 14px;
    margin: 10px;
  }
`;

export default function PostPageTitle() {
  return (
    <PostPageTitleStyle>
      <h1 className="post_page_title">오늘의 농구</h1>
      <span className="post_page_dsc">농구 게스트를 쉽게 찾아보세요!</span>
    </PostPageTitleStyle>
  );
}
