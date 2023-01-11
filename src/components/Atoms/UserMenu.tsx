import { useState } from "react";
import styled from "styled-components";
import MenuIcon from "../../assets/menu.svg";
import MenuLightIcon from "../../assets/menu_white.svg";
import UserMenuModal from "../Molecules/UserMenuModal";

const UserMenuStyled = styled.div`
  & > img {
    cursor: pointer;
    width: 35px;
    height: 35px;
  }

  .wallpaper {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
`;

type TProps = {
  isDark: boolean;
};

export default function UserMenu({ isDark }: TProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <UserMenuStyled>
      <img
        src={isDark ? MenuLightIcon : MenuIcon}
        alt="menu"
        onClick={(e) => setIsOpen(true)}
      />
      {isOpen ? (
        <div
          className="wallpaper"
          onClick={(e) => {
            setIsOpen(false);
          }}
        >
          <UserMenuModal />
        </div>
      ) : null}
    </UserMenuStyled>
  );
}
