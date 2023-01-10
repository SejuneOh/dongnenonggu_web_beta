import React from "react";
import styled from "styled-components";
import cancel from "../../assets/close_black.svg";

const ExplainModalStyle = styled.div`
  .wallpaper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--gray);
    opacity: 0.3;
  }

  .explain_modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: var(--light-white);
    width: 30%;
    height: 100vh;
    overflow: scroll;
    animation-name: slide_in;
    animation-duration: 500ms;
    animation-fill-mode: both;

    .modal_header {
      /* background-color: var(--light-gray); */
      padding: 1rem;
      border-bottom: 1px solid var(--light-gray);
    }

    .modal_item {
      padding: 1rem;
      border: 1px solid black;
      height: 200px;

      & > h2 {
        font-size: 1.2rem;
      }
    }
  }
`;

interface Props {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ExplainModal({ setModalActive }: Props) {
  return (
    <ExplainModalStyle>
      <div
        className="wallpaper"
        onClick={(e) => {
          setModalActive(false);
        }}
      ></div>
      <div className="explain_modal">
        <div className="modal_header">
          <img
            src={cancel}
            alt=""
            onClick={(e) => {
              setModalActive(false);
            }}
          />
        </div>
        <div className="modal_item">
          <h2>실내, 실외 경기장을 선택 해주세요</h2>
          <p>게스트와 초대할 경기장을 선택해주세요</p>
        </div>{" "}
        <div className="modal_item">
          <h2>위치를 선택해주세요</h2>
          <p> 정확한 경기장의 위치를 선택해 주세요</p>
        </div>{" "}
        <div className="modal_item">
          <h2>필요한 게스트 인원 수, 요금을 선택해주세요</h2>
          <p>게스트의 인원 수와 게스트 비용을 정합니다.</p>
        </div>{" "}
        <div className="modal_item">
          <h2>글의 제목과 내용을 입력해주세요</h2>
          <p>업로드할 동호회 또는 필요 내용을 입력해주세요</p>
        </div>
      </div>
    </ExplainModalStyle>
  );
}
