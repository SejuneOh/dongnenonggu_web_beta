import React, { useState } from "react";
import styled from "styled-components";
import CorrectBtn from "../Atoms/CorrectBtn";
import WrongAlertSpan from "../Atoms/WrongAlertSpan";
import CustomInput from "../Molecules/CustomInput";

const CorrectInputComponentStyled = styled.div`
  .alert_wrapper {
    display: flex;
    margin-top: 5px;
    justify-content: space-between;
    align-items: center;
  }
`;

interface Props {
  isEmail: boolean;
  checkState: React.Dispatch<React.SetStateAction<boolean>>;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  compareValue?: string;
}

export default function CorrectInputComponent({
  isEmail,
  checkState,
  setEmail = () => {},
  compareValue = "",
}: Props) {
  const [warn, setWarn] = useState({ msg: "", color: "red" });
  const [active, setActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActive(false);
    if (isEmail) {
      setEmail(e.target.value);
    }
    setValue(e.target.value);
  };

  const correctBtnClickHandle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setActive(true);
    if (isEmail) {
      const reg = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

      // email 형식 비교
      if (!reg.test(value)) {
        setWarn({ msg: "이메일 양식으로 입력해주세요", color: "red" });
        return;
      }

      // 중복 이메일 test
      if (false) {
        setWarn({ msg: "중복 이메일입니다.", color: "red" });
        return;
      }

      setWarn({ msg: "사용가능한 이메일 입니다.", color: "green" });
      checkState(true);
    } else {
      if (compareValue !== value) {
        setWarn({ msg: "작성한 비밀번호와 같지 않습니다.", color: "red" });
        return;
      }

      setWarn({ msg: "비밀번호 확인했습니다.", color: "green" });
      checkState(true);
    }
  };

  return (
    <CorrectInputComponentStyled>
      <CustomInput
        name={isEmail ? "email" : "ck_password"}
        type={isEmail ? "text" : "password"}
        placeholder={isEmail ? "이메일" : "비밀번호 확인"}
        onChangeFunc={onChange}
      />
      <div className="alert_wrapper">
        <WrongAlertSpan color={warn.color} active={active} msg={warn.msg} />
        <CorrectBtn onClick={correctBtnClickHandle}>
          {isEmail ? "이메일 확인" : "비밀번호 확인"}
        </CorrectBtn>
      </div>
    </CorrectInputComponentStyled>
  );
}
