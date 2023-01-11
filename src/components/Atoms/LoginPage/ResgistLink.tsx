import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RegistLinkStyle = styled.div`
  padding: 1rem;
  font-size: 13px;
  text-align: center;

  & > a {
    color: var(--blue);
  }
`;

export default function RegistLink() {
  return (
    <RegistLinkStyle>
      <span>처음 방문하시나요?? </span>
      <Link to="/account/regist">회원가입 하러가기</Link>
    </RegistLinkStyle>
  );
}
