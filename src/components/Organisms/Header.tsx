import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import HeaderLeft from "../Molecules/HeaderLeft";
import HeaderRight from "../Molecules/HeaderRight";

const HeaderStyle = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: var(--dark-gray);
  background-color: var(--light-white);

  &.black {
    color: var(--light-white);
    background-color: var(--dark-gray);
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

interface HeaderProps extends HTMLAttributes<HTMLHeadElement> {
  isDark: boolean;
  mode: number;
}

export default function Header({ isDark, mode, ...props }: HeaderProps) {
  return (
    <HeaderStyle className={isDark ? "black" : ""}>
      <HeaderLeft mode={mode} />
      <HeaderRight isDark={isDark} mode={mode} />
    </HeaderStyle>
  );
}
