import { HTMLAttributes } from "react";
import styled from "styled-components";
import GuestMapTitle from "../../Atoms/GuestPage/GuestMapTitle";
import Map from "../../Atoms/GuestPage/Map";
import TitleUnderLine from "../../Atoms/GuestPage/TitleUnderLine";
import GuestAddressDetail from "./GuestAddressDetail";

const GuestMapStyle = styled.div`
  margin-top: 1rem;

  .guest_address_container {
    box-shadow: 2px 2px 4px 0 rgb(0 0 0 / 40%);
  }
`;

interface GuestMapProps extends HTMLAttributes<HTMLDivElement> {
  address: string | undefined;
  addressDetail: string | undefined;
  zoneNumber: number | undefined;
}

const GuestMap: React.FC<GuestMapProps> = ({
  address,
  addressDetail,
  zoneNumber,
  ...props
}) => {
  return (
    <GuestMapStyle {...props}>
      <GuestMapTitle text="위치" />
      <TitleUnderLine />
      {/* 상세주조 */}
      <div className="guest_address_container">
        <GuestAddressDetail
          address={address ? address : ""}
          detailAdress={addressDetail ? addressDetail : ""}
        />
        <Map location={address ? address : ""} />
      </div>
    </GuestMapStyle>
  );
};

export default GuestMap;
