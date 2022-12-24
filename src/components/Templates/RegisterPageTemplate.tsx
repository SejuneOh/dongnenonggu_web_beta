import { useState } from "react";
import { RegisterPageTemplateStyle } from "../../styles/registerPageTemplateStyle";
import RegistBtn from "../Atoms/ RegistBtn";
import CorretEmailBtn from "../Atoms/CorretEmailBtn";
import Logo from "../Atoms/Logo";
import WrongAlertSpan from "../Atoms/WrongAlertSpan";
import CustomInput from "../Molecules/CustomInput";

export default function RegisterPageTemplate() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  return (
    <RegisterPageTemplateStyle>
      <div className="login_logo_wrapper">
        <Logo />
      </div>
      <div className="login_input_container">
        <span className="login_input_title">회원 가입</span>
        <CustomInput type="text" placeholder="이메일" onChangeFunc={setEmail} />
        <div className="register_alert_email_corret">
          <WrongAlertSpan msg="중복된 이메일 입니다." />
          <CorretEmailBtn />
        </div>
        <CustomInput
          type="password"
          placeholder="비밀번호"
          onChangeFunc={setPassword}
        />
        <CustomInput
          type="password"
          placeholder="비밀번호 확인"
          onChangeFunc={setCheckPassword}
        />
        <WrongAlertSpan msg="작성한 비밀번호와 다릅니다." />
        <CustomInput
          type="text"
          placeholder="닉네임"
          onChangeFunc={setNickName}
        />
      </div>
      <div className="register_submit_wrapper">
        <RegistBtn />
      </div>
    </RegisterPageTemplateStyle>
  );
}
