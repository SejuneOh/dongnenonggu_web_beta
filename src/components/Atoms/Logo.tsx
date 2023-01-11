import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoLink = styled(Link)`
  font-size: 36px;
  font-weight: 700;
  color: inherit;
`;

export default function Logo() {
  return <LogoLink to="/">DONGNONG</LogoLink>;
}
