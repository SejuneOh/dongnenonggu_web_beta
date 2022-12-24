import React from "react";
import styled from "styled-components";
import NickNameLabel from "../../Atoms/PostCard/NickNameLabel";
import PositionLabel from "../../Atoms/PostCard/PositionLabel";

type TProps = {
  nickName: string | undefined;
  position: string | undefined;
};

const UserDescriptionDivStyle = styled.div`
  margin-top: auto;
`;

export default function UserDescriptionDiv({ nickName, position }: TProps) {
  return (
    <UserDescriptionDivStyle>
      <NickNameLabel nickName={nickName} />
      <PositionLabel position={position} />
    </UserDescriptionDivStyle>
  );
}
