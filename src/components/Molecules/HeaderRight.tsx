import { HTMLAttributes } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/redux_hooks";
import LoginBtn from "../Atoms/LoginBtn";
import UserMenu from "../Atoms/UserMenu";

const HeaderRightStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  margin-right: 4rem;
`;

interface HeaderRightProps extends HTMLAttributes<HTMLDivElement> {
  isDark: boolean;
  mode: number;
}

export default function HeaderRight({
  isDark,
  mode,
  ...props
}: HeaderRightProps) {
  const isLogin = useAppSelector((state) => state.login.isLogin);
  return (
    <HeaderRightStyle {...props}>
      {mode === 1 ? null : (
        <>{isLogin ? <UserMenu isDark={isDark} /> : <LoginBtn />}</>
      )}
    </HeaderRightStyle>
  );
}
