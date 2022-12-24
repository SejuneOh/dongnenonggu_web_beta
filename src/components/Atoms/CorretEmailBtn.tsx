import React from "react";
import styled from "styled-components";

const CorretEmailBtnStyle = styled.button`
  border: 0;
  border-radius: 5px;
  width: 80px;
  height: 30px;
  background-color: var(--blue);
  color: var(--white);
`;

export default function CorretEmailBtn() {
  return <CorretEmailBtnStyle>이메일 확인</CorretEmailBtnStyle>;
}
