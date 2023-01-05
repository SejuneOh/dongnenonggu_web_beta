import styled from "styled-components";
import { ComponentProps, makePostItem } from "../../HoC/MakePostItem";
import Map from "../Atoms/GuestPage/Map";
import GuestAddressDetail from "../Molecules/GuestPage/GuestAddressDetail";

const PostMapStyle = styled.div`
  box-shadow: 1px 1px 0.5px 1px var(--light-gray);
`;

const PostMap = ({ board }: ComponentProps) => {
  return (
    <PostMapStyle>
      {board && (
        <>
          <GuestAddressDetail
            address={board.location!}
            detailAdress={board.locationDetail!}
          />
          <Map location={board.location!} />
        </>
      )}
    </PostMapStyle>
  );
};

export default makePostItem(PostMap);
