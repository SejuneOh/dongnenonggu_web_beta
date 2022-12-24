import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import GuestQnACard from "../Molecules/GuestPage/GuestQnACard";

const GuestQnAModalStyle = styled.div`
  position: relative;
  .guest_modal_wallpaper {
    /* content: ""; */
    position: fixed;
    left: 0;
    height: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    opacity: 0.3;
    background-color: var(--gray);
  }
`;

interface GuestQnAModalProps extends HTMLAttributes<HTMLDivElement> {
  isActiveDispatch: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GuestQnAModal({
  isActiveDispatch,
  ...props
}: GuestQnAModalProps) {
  return (
    <GuestQnAModalStyle {...props}>
      <div
        className="guest_modal_wallpaper"
        onClick={(e) => isActiveDispatch(false)}
      ></div>
      <GuestQnACard isActiveDispatch={isActiveDispatch} />
    </GuestQnAModalStyle>
  );
}
