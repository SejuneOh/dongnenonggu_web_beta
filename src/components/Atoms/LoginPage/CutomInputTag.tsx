import React, { AllHTMLAttributes, HTMLAttributes } from "react";
import styled from "styled-components";

const CutomInputTagStyle = styled.input`
  position: relative;
  width: 100%;
  align-self: stretch;
  background-color: transparent;
  z-index: 3;
  outline: 0;
  border: 0;
`;

interface CutomInputTagProps extends AllHTMLAttributes<HTMLInputElement> {
  type: string;
  IsFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CutomInputTag({
  type,
  IsFocus,
  ...props
}: CutomInputTagProps) {
  // input event
  const focusHandle = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    IsFocus(true);
  };

  const blurHandle = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (e.target.value) return;
    IsFocus(false);
  };

  return (
    <CutomInputTagStyle
      {...(props as HTMLAttributes<HTMLInputElement>)}
      type={type ? type : "text"}
      onFocus={focusHandle}
      onBlur={blurHandle}
    ></CutomInputTagStyle>
  );
}
