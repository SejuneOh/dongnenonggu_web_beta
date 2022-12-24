import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import Logo from "../Atoms/Logo";
import MenuLink from "../Atoms/MenuLink";

const HeaderLeftStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  margin-left: 4rem;

  .menu_container {
    margin-left: 4rem;
  }
`;

interface HeaderLeftProps extends HTMLAttributes<HTMLDivElement> {
  mode: number;
}

export default function HeaderLeft({ mode, ...props }: HeaderLeftProps) {
  return (
    <HeaderLeftStyle {...props}>
      <Logo />
      <div className="menu_container">
        {mode === 1 ? null : (
          <>
            <MenuLink linkPath="/post" text="오늘의 농구" />
            {/* <MenuLink linkPath="/amdin" text="관리자" /> */}
          </>
        )}
      </div>
    </HeaderLeftStyle>
  );
}
