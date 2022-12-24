import React, { HTMLAttributes } from "react";
import styled from "styled-components";

const PostUploadBtnStyle = styled.button`
  width: 100px;
  height: 40px;
  font-size: 12px;
  font-weight: 700;
  background-color: inherit;
  border: 1px solid var(--middle-gray);
  border-radius: 5px;
  cursor: pointer;
`;

export default function PostUploadBtn({
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  return <PostUploadBtnStyle {...props}>글쓰기</PostUploadBtnStyle>;
}
