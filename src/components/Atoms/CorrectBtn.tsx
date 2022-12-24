import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";
import styled from "styled-components";

const CorrectlBtnStyle = styled.button`
  border: 0;
  border-radius: 5px;
  width: 90px;
  height: 30px;
  background-color: var(--blue);
  color: var(--white);
`;

export default function CorrectBtn({
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  return <CorrectlBtnStyle {...props}></CorrectlBtnStyle>;
}
