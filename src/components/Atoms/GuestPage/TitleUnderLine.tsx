import React from "react";
import styled from "styled-components";

const TitleUnderLineStyle = styled.div`
  width: 20px;
  height: 4px;
  background-color: var(--blue);
  margin-bottom: 1rem;
`;

export default function TitleUnderLine() {
  return <TitleUnderLineStyle></TitleUnderLineStyle>;
}
