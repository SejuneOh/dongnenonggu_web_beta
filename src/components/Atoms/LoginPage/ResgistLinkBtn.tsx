import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginSubmitBtnStyle = styled.button`
  width: 100%;
  height: 56px;
  border: 0;
  border-radius: 5px;
  background-color: var(--blue);
  color: var(--white);
  margin-top: 10px;
`;

export default function ResgistLinkBtn() {
  const navigator = useNavigate();
  const buttonClickhandle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    navigator("/register");
  };
  return (
    <LoginSubmitBtnStyle type="submit" onClick={buttonClickhandle}>
      회원가입
    </LoginSubmitBtnStyle>
  );
}
