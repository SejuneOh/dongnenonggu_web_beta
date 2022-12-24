import React from "react";
import styled from "styled-components";
import PostRegisterTemplate from "../components/Templates/PostRegisterTemplate";

const PostRegistPageStyle = styled.section`
  margin-top: 6rem;
  margin-bottom: 6rem;
  height: calc(100vh - 12rem);
  padding: 0 80px;
`;

export default function PostRegistPage() {
  return (
    <PostRegistPageStyle>
      <PostRegisterTemplate />
    </PostRegistPageStyle>
  );
}
