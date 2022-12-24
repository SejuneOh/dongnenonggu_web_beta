import React from "react";
import styled from "styled-components";
import MenuLink from "../Atoms/MenuLink";

const MenuModalStyle = styled.div`
  position: absolute;
  color: var(--gray);
  background-color: var(--white);
  /* right: 0; */
  right: 4rem;
  top: 4.5rem;
  width: 200px;
  border: 1px solid var(--middle-gray);
  border-radius: 10px;
  padding: 1rem;

  .user_menu_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    /* z-index:  */

    & > a {
      margin-bottom: 1rem;
    }
  }
`;

export default function UserMenuModal() {
  return (
    <MenuModalStyle>
      <div className="user_menu_container">
        <MenuLink linkPath="/mypage" text="마이 페이지" />
        <MenuLink linkPath="/test" text="메뉴 1" />
        <MenuLink linkPath="#" text="메뉴 2" />
      </div>
    </MenuModalStyle>
  );
}
