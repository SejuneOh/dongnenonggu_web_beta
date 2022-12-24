import React from "react";
import styled from "styled-components";
import locationIcon from "../../../assets/location.svg";

type TProps = {
  position: string | undefined;
};

const PositionLabelStyle = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > img {
    width: 15px;
    height: 15px;
  }
`;

export default function PositionLabel({ position }: TProps) {
  return (
    <PositionLabelStyle>
      <img src={locationIcon} alt="location icon" />
      <span>{position}</span>
    </PositionLabelStyle>
  );
}
