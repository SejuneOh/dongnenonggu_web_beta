import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { HeaderLeftStyle } from "../../styles/HeaderLeftStyle";
import Logo from "../Atoms/Logo";
import MenuLink from "../Atoms/MenuLink";

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
