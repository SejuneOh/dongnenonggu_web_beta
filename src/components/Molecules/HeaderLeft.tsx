import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderLeftStyle } from "../../styles/HeaderLeftStyle";
import Logo from "../Atoms/Logo";
import MenuLink from "../Atoms/MenuLink";

interface HeaderLeftProps extends HTMLAttributes<HTMLDivElement> {
  mode: number;
}

export default function HeaderLeft({ mode, ...props }: HeaderLeftProps) {
  const navigator = useNavigate();
  return (
    <HeaderLeftStyle {...props}>
      <Logo />
      <div className="menu_container">
        {mode === 1 ? null : (
          <>
            <MenuLink
              text="오늘의 농구"
              onClick={(e) => {
                navigator("/post");
              }}
            />
            {/* <MenuLink linkPath="/amdin" text="관리자" /> */}
          </>
        )}
      </div>
    </HeaderLeftStyle>
  );
}
