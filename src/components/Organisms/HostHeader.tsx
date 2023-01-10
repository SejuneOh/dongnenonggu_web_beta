import React from "react";
import styled from "styled-components";
import Logo from "../Atoms/Logo";
import RoundBtn from "../Atoms/RoundBtn";

const HostHeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid var(--light-gray);
`;

interface Props {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function HostHeader({ setModalActive }: Props) {
  return (
    <HostHeaderStyle>
      <Logo />
      <RoundBtn
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          setModalActive(true)
        }
      />
    </HostHeaderStyle>
  );
}
