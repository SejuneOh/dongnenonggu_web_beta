import React, { HTMLAttributes, useState } from "react";
import styled from "styled-components";
import CustomInputLabel from "../Atoms/LoginPage/CustomInputLabel";
import CutomInputTag from "../Atoms/LoginPage/CutomInputTag";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  type: string;
  placeholder: string;
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInputStyle = styled.div`
  position: relative;
  padding: 10px 0 11px;
  margin-top: 27px;
  border-bottom: 1px solid var(--middle-gray);
  font-size: 100%;

  &.focus {
    border-bottom: 1px solid var(--blue);
  }
`;

export default function CustomInput({
  name,
  type,
  placeholder,
  onChangeFunc,
  ...props
}: Props) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <CustomInputStyle {...props} className={isFocus ? "focus" : ""}>
      <CutomInputTag
        name={name}
        type={type}
        IsFocus={setIsFocus}
        onChange={onChangeFunc}
      />
      <CustomInputLabel placeholder={placeholder} isFocus={isFocus} />
    </CustomInputStyle>
  );
}
