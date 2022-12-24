import React from "react";
import styled from "styled-components";
import MainTemplate from "../components/Templates/MainTemplate";

const MainPageStyle = styled.section`
  margin-top: 6rem;
  /* border: 1px solid black; */
`;

export default function MainPage() {
  return (
    <MainPageStyle>
      <MainTemplate />
    </MainPageStyle>
  );
}
