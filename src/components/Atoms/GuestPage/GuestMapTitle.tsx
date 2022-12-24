import React, { HTMLAttributes } from "react";
import styled from "styled-components";

const GuestMapTitleStyle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

interface GuestMapTitleProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

export default function GuestMapTitle({ text, ...props }: GuestMapTitleProps) {
  return <GuestMapTitleStyle {...props}>{text}</GuestMapTitleStyle>;
}
