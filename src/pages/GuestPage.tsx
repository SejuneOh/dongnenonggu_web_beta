import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import GuestPageTemplate from "../components/Templates/GuestPageTemplate";

const GuestPageStyle = styled.section`
  margin: 6rem 8rem 0 8rem;
  padding-top: 3rem;
  width: 1100px;
  margin: 6rem auto;
`;

export default function GuestPage() {
  // boardKey
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!id) return;
  }, []);

  return (
    <GuestPageStyle>
      <GuestPageTemplate id={id ? id : ""} />
    </GuestPageStyle>
  );
}
