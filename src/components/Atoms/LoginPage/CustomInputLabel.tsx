import React from "react";
import styled from "styled-components";

const CustomInputLabelStyle = styled.label`
  position: absolute;
  left: 0;
  bottom: 3px;
  top: 11px;
  line-height: 19px;
  z-index: 2;
  transform-origin: bottom left;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, bottom, transform;
  color: var(--middle-gray);

  &.custom_input_focus {
    transform: scale(0.75) translateY(-39px);
    color: var(--blue);
  }
`;

type TProps = {
  placeholder: string;
  isFocus: boolean;
};

export default function CustomInputLabel({ placeholder, isFocus }: TProps) {
  return (
    <CustomInputLabelStyle className={isFocus ? "custom_input_focus" : ""}>
      {placeholder}
    </CustomInputLabelStyle>
  );
}
