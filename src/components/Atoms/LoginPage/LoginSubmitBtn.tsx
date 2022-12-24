import React, { HTMLAttributes, HtmlHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginSubmitBtnStyle = styled.button`
  width: 100%;
  height: 56px;
  border: 0;
  border-radius: 5px;
`;

interface LoginSubmitBtnProps extends HTMLAttributes<HTMLButtonElement> {}

export default function LoginSubmitBtn({
  ...props
}: HtmlHTMLAttributes<HTMLButtonElement>) {
  const navigator = useNavigate();
  return (
    <LoginSubmitBtnStyle {...props} type="submit">
      로그인
    </LoginSubmitBtnStyle>
  );
}
