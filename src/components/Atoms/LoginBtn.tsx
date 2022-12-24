import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginBtnStyled = styled.button`
  margin-left: 1rem;
  background-color: var(--light-white);
  border: 1px solid var(--light-gray);
  border-radius: 5px;
  padding: 0.3rem 1rem;
  cursor: pointer;
`;

export default function LoginBtn() {
  const navigate = useNavigate();

  return (
    <LoginBtnStyled onClick={(e) => navigate("/login")}>로그인</LoginBtnStyled>
  );
}
