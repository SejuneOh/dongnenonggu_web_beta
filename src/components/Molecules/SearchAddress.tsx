import React, { HTMLAttributes, useState } from "react";
import { SearchAddressStyle } from "../../styles/searchAddressStyle";
import DaumPostCode from "react-daum-postcode";
import { useAppDispatch, useAppSelector } from "../../hooks/redux_hooks";
import boardSlice from "../../store/board.slice";

interface SearchAddressProps extends HTMLAttributes<HTMLDivElement> {}

export default function SearchAddress({ ...props }: SearchAddressProps) {
  const [postModalActive, setPostModalActive] = useState<boolean>(false);
  const address = useAppSelector((state) => state.board.uploadBoard.location);
  const addressDetail = useAppSelector(
    (state) => state.board.uploadBoard.locationDetail
  );
  const zoneNubmer = useAppSelector(
    (state) => state.board.uploadBoard.zoneNumber
  );

  const dispatch = useAppDispatch();

  const detailAddressChangeHandle = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(boardSlice.actions.setDetailLocation(e.target.value));
  };

  const duampostHandle = (data: any) => {
    // modal 닫기
    setPostModalActive(false);

    const _address: string = data.address;
    const _zoneCode: number = +data.zonecode;

    if (!_address && !_zoneCode) return;
    dispatch(boardSlice.actions.setLocation(_address));
    dispatch(boardSlice.actions.setZoneNumber(_zoneCode));
  };

  return (
    <SearchAddressStyle {...props}>
      <div className="address_container">
        <div className="address_input_container">
          <div className="address_input_wrapper">
            <input
              className="address_post_number"
              readOnly={true}
              value={zoneNubmer === 0 ? "" : zoneNubmer}
            />
          </div>
          <div className="address_button_wrapper">
            <button onClick={(e) => setPostModalActive(true)}>주소 찾기</button>
          </div>
        </div>
        <div className="address_detail_input_container">
          <input
            className="address"
            type="text"
            readOnly={true}
            value={address}
          />
          <input
            className="detail_address"
            type="text"
            placeholder="상세 주소를 입력해주세요"
            onChange={detailAddressChangeHandle}
            value={addressDetail}
          />
        </div>
      </div>
      {postModalActive ? (
        <div className="daum_post_container">
          <div
            className="daum_post_wallpaper"
            onClick={(e) => setPostModalActive(false)}
          ></div>
          <div className="daum_post_wrapper">
            <div className="daum_close">
              <button
                className="daum_post_close"
                onClick={(e) => setPostModalActive(false)}
              >
                취소
              </button>
            </div>
            <DaumPostCode onComplete={duampostHandle} />
          </div>
        </div>
      ) : null}
    </SearchAddressStyle>
  );
}
