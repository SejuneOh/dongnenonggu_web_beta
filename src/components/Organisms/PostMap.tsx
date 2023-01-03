import { useEffect } from "react";
import { ComponentProps, makePostItem } from "../../HoC/MakePostItem";
import Map from "../Atoms/GuestPage/Map";
import GuestAddressDetail from "../Molecules/GuestPage/GuestAddressDetail";

const PostMap = ({ board }: ComponentProps) => {
  return (
    <div>
      {board && (
        <>
          <GuestAddressDetail
            address={board.location!}
            detailAdress={board.locationDetail!}
          />
          <Map location={board.location!} />
        </>
      )}
    </div>
  );
};

export default makePostItem(PostMap);
