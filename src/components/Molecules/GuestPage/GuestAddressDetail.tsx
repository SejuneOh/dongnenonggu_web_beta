import React from "react";
import styled from "styled-components";

type TProps = {
  address: string;
  detailAdress: string;
};

const GuestAddressDetailStyle = styled.div`
  padding: 2rem;

  & > h3 {
    font-size: 28px;
    margin-bottom: 1rem;
  }

  & > span {
    display: block;
    margin-left: 1rem;
    color: var(--middle-gray);
  }
`;

export default function GuestAddressDetail({ address, detailAdress }: TProps) {
  return (
    <GuestAddressDetailStyle>
      <h3>우리들의 농구장</h3>
      <span>
        {address} {detailAdress}
      </span>
    </GuestAddressDetailStyle>
  );
}
