import React from "react";
import styled from "styled-components";

const CustomCheckBoxStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

type TProps = {
  text: string;
};
export default function CustomCheckBox({ text }: TProps) {
  return (
    <CustomCheckBoxStyle>
      <input type="checkbox" />
      <label>{text}</label>
    </CustomCheckBoxStyle>
  );
}
