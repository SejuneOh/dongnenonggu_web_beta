import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { funcRegistUser } from "../../api/user.api";
import useInput from "../../hooks/useInput";
import { RegistUser } from "../../model/userModel";
import { RegisterPageTemplateStyle } from "../../styles/registerPageTemplateStyle";
import RegistBtn from "../Atoms/ RegistBtn";
import Logo from "../Atoms/Logo";
import CustomInput from "../Molecules/CustomInput";
import CorrectInputComponent from "../Organisms/CorrectInputComponent";

export default function RegisterPageTemplate() {
  const initState: RegistUser = {
    name: "",
    password: "",
  };
  const [{ name, password }, onChange, reset] = useInput(initState);
  const [email, setEmail] = useState<string>("");
  const [isCheckEmail, setIsCheckEmail] = useState<boolean>(false);
  const [isCheckPassword, setIsCheckPassword] = useState<boolean>(false);
  const navigator = useNavigate();

  const onSubmitClickHandle = useCallback(async () => {
    if (!isCheckEmail || !isCheckPassword || !name || !password) {
      alert("이메일, 비밀번호 중복 확인 및 작성 부탁드립니다.");
      return;
    }

    const ret = await funcRegistUser(email, password, name);

    if (ret) {
      alert("회원가입 완료했습니다.");
      reset();
      navigator("/login");
    } else {
      navigator("/");
    }
  }, [email, name, password, isCheckEmail, isCheckPassword]);

  return (
    <RegisterPageTemplateStyle>
      <div className="login_logo_wrapper">
        <Logo />
      </div>
      <div className="login_input_container">
        <span className="login_input_title">회원 가입</span>
        <CorrectInputComponent
          isEmail={true}
          checkState={setIsCheckEmail}
          setEmail={setEmail}
        />
        <CustomInput
          name="password"
          type="password"
          placeholder="비밀번호"
          onChangeFunc={onChange}
        />
        <CorrectInputComponent
          isEmail={false}
          compareValue={password}
          checkState={setIsCheckPassword}
        />
        <CustomInput
          name="name"
          type="text"
          placeholder="닉네임"
          onChangeFunc={onChange}
        />
      </div>
      <div className="register_submit_wrapper">
        <RegistBtn onClick={onSubmitClickHandle} />
      </div>
    </RegisterPageTemplateStyle>
  );
}
