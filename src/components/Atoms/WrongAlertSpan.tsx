import React from "react";
import styled from "styled-components";

const WrongAlertSpanStyle = styled.span`
  font-size: 12px;
  color: var(--red);
`;

type TProps = {
  color: string;
  active: boolean;
  msg: string;
};

export default function WrongAlertSpan({ color, active, msg }: TProps) {
  return (
    <WrongAlertSpanStyle style={{ color: color }}>
      {active ? msg : ""}
    </WrongAlertSpanStyle>
  );
}
