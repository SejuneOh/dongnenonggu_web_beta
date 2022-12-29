import React, { HTMLAttributes } from "react";
import styled from "styled-components";

const DefaultButtonStyle = styled.button`
  color: var(--white);
  border: 0;
  width: 100px;
  height: 40px;
  border-radius: 10px;
`;

interface Props extends HTMLAttributes<HTMLButtonElement> {
  color: string;
  text: string;
}

export default function DefaultButton({ color, text, ...props }: Props) {
  return (
    <DefaultButtonStyle
      {...props}
      style={{
        backgroundColor: `var(--${color})`,
      }}
    >
      {text}
    </DefaultButtonStyle>
  );
}
