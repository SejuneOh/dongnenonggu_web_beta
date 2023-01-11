import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux_hooks";
import { HeaderLeftStyle } from "../../styles/HeaderLeftStyle";
import Logo from "../Atoms/Logo";
import MenuLink from "../Atoms/MenuLink";

interface HeaderLeftProps extends HTMLAttributes<HTMLDivElement> {
  mode: number;
}

export default function HeaderLeft({ mode, ...props }: HeaderLeftProps) {
  const navigator = useNavigate();
  const isLogin = useAppSelector((state) => state.login.isLogin);
  return (
    <HeaderLeftStyle {...props}>
      <Logo />
      <div className="menu_container">
        {mode === 1 ? null : (
          <>
            <MenuLink
              text="홈"
              onClick={(e) => {
                navigator("/");
              }}
            />
            <MenuLink
              text="오늘의 농구"
              onClick={(e) => {
                isLogin ? navigator("/post") : alert("로그인 부탁드립니다.");
              }}
            />
          </>
        )}
      </div>
    </HeaderLeftStyle>
  );
}
