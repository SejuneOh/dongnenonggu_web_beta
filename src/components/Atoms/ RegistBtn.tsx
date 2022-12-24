import React from "react";
import styled from "styled-components";
const RegistBtnStyle = styled.button`
  width: 100%;
  height: 56px;
  border: 0;
  border-radius: 5px;
  background-color: var(--blue);
  color: var(--white);
  margin-top: 10px;
`;

export default function RegistBtn() {
  return <RegistBtnStyle>회원가입</RegistBtnStyle>;
}
