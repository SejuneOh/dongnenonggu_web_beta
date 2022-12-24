import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ForgotPassWordLinkStyle = styled(Link)`
  color: var(--blue);
`;

export default function ForgotPassWordLink() {
  return (
    <ForgotPassWordLinkStyle to="#">
      비밀번호를 잊으셨습니까?
    </ForgotPassWordLinkStyle>
  );
}
