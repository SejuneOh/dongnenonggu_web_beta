import React from "react";
import styled from "styled-components";

const WrongAlertSpanStyle = styled.span`
  font-size: 12px;
  color: var(--red);
`;

type TProps = {
  msg: string;
};

export default function WrongAlertSpan({ msg }: TProps) {
  return <WrongAlertSpanStyle>{msg ? msg : ""}</WrongAlertSpanStyle>;
}
