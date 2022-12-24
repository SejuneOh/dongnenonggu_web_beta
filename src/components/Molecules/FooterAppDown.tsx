import React from "react";
import styled from "styled-components";
import AppDownLoadBtn from "../Atoms/AppDownLoadBtn";

const FooterAppDownStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .down_title {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  .app_container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem;
  }
`;

export default function FooterAppDown() {
  return (
    <FooterAppDownStyle>
      <p className="down_title">동네농구 앱 다운로드</p>
      <div className="app_container">
        <AppDownLoadBtn title="구글 다운로드" url="#" />
        <AppDownLoadBtn title="애플 다운로드" url="#" />
      </div>
    </FooterAppDownStyle>
  );
}
