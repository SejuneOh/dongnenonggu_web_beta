import React, { useState } from "react";
import styled from "styled-components";
import CustomInputLabel from "../Atoms/LoginPage/CustomInputLabel";
import CutomInputTag from "../Atoms/LoginPage/CutomInputTag";

type TProps = {
  type: string;
  placeholder: string;
  onChangeFunc: React.Dispatch<React.SetStateAction<string>>;
};

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
  type,
  placeholder,
  onChangeFunc,
}: TProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const customInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChangeFunc(e.currentTarget.value);
  };

  return (
    <CustomInputStyle className={isFocus ? "focus" : ""}>
      <CutomInputTag
        type={type}
        IsFocus={setIsFocus}
        onChange={customInputChange}
      />
      <CustomInputLabel placeholder={placeholder} isFocus={isFocus} />
    </CustomInputStyle>
  );
}
