import React, { HTMLAttributes } from "react";
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

export default function RegistBtn<T extends HTMLAttributes<HTMLButtonElement>>({
  ...props
}: T) {
  return <RegistBtnStyle {...props}>회원가입</RegistBtnStyle>;
}
