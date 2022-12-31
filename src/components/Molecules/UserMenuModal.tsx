import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks/redux_hooks";
import { funcLogOut } from "../../store/loginAction";
import MenuLink from "../Atoms/MenuLink";

const MenuModalStyle = styled.div`
  position: absolute;
  color: var(--gray);
  background-color: var(--light-white);
  right: 4rem;
  top: 4.5rem;
  width: 200px;
  border: 1px solid var(--middle-gray);
  border-radius: 10px;
  z-index: 2;

  .user_menu_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style: none;
    margin: 0;

    & > a {
      margin-bottom: 1rem;
    }
  }
`;

export default function UserMenuModal() {
  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  const logoutMenuClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    dispatch(funcLogOut());

    navigator("/");
  };

  return (
    <MenuModalStyle>
      <ul className="user_menu_container">
        <MenuLink text="마이페이지" />
        <MenuLink text="로그아웃" onClick={logoutMenuClick} />
      </ul>
    </MenuModalStyle>
  );
}
