import styled from "styled-components";
import DaumPostCode from "react-daum-postcode";
import { PostRegisterTitle } from "../Templates/PostRegisterTemplate";
import React, { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux_hooks";
const EditLocationStyle = styled.div`
  input {
    :first-child {
      margin-right: 1rem;
      width: 50%;
    }

    margin-bottom: 1rem;
    padding: 0.4rem;
    width: 100%;
  }

  .edit_search_wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .zonenumber {
      & > button {
        color: white;
        padding: 0.4rem;
        outline: none;
        border: 0;
        border-radius: 5px;
        background-color: var(--green);
      }
    }
  }
  .searchModal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    .modalWrapper {
      position: fixed;
      width: 50%;
      height: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -75%);
      padding: 0.2rem;
      background-color: var(--white);

      .modal_header {
        position: relative;
        background-color: inherit;
        padding: 0.3rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        & > button {
          border: 0;
          background-color: var(--blue);
          color: white;
          padding: 0.3rem;
          border-radius: 3px;
        }
      }
    }
  }
`;

interface Props {
  boardNo: number;
  locationObj: any;
  setLocation: React.Dispatch<React.SetStateAction<any>>;
}

export default function EditLocation({
  boardNo,
  locationObj,
  setLocation,
}: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const board = useAppSelector((state) =>
    state.board.boardList.find((el) => el.boardNo === boardNo)
  );

  useEffect(() => {
    setLocation({
      location: board?.location,
      locationDetail: board?.locationDetail,
      zoneNumber: board?.zoneNumber,
    });
  }, []);

  const onCompleteHandle = useCallback(
    (data: any) => {
      setIsActive(false);

      const _address: string = data.address;
      const _zoneCode: number = +data.zonecode;
      if (!_address && !_zoneCode) return;

      setLocation((prev: any) => {
        return { ...prev, location: _address, zoneNumber: _zoneCode };
      });
    },
    [locationObj.zoneNumber, locationObj.location]
  );

  return (
    <EditLocationStyle>
      <PostRegisterTitle className="edit_sub_title " text="경기장 주소" />
      <div className="edit_search_wrapper">
        <div className="zonenumber">
          <input
            type="text"
            readOnly={true}
            defaultValue={locationObj?.zoneNumber}
          />
          <button
            onClick={(e) => {
              setIsActive((prev) => !prev);
            }}
          >
            주소 찾기
          </button>
        </div>
        <input
          type="text"
          readOnly={true}
          defaultValue={locationObj?.location}
        />
        <input
          type="text"
          defaultValue={locationObj?.locationDetail}
          onChange={(e) => {
            setLocation((prev: any) => {
              return {
                ...prev,
                locationDetail: e.target.value,
              };
            });
          }}
        />
      </div>
      {isActive && (
        <div className="searchModal" onClick={(e) => setIsActive(false)}>
          <div className="modalWrapper">
            <div className="modal_header">
              <button onClick={(e) => setIsActive(false)}>닫기</button>
            </div>
            <DaumPostCode onComplete={onCompleteHandle} />
          </div>
        </div>
      )}
    </EditLocationStyle>
  );
}
