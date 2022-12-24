import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { funcDoLogin } from "../../api/serverApi";
import { useAppDispatch } from "../../hooks/redux_hooks";
import { funcSetisLogin } from "../../store/loginAction";
import { LoginPageTemplateStyle } from "../../styles/loginPageTemplateStyle";
import CustomCheckBox from "../Atoms/LoginPage/CustomCheckBox";
import ForgotPassWordLink from "../Atoms/LoginPage/ForgotPassWordLink";
import LoginSubmitBtn from "../Atoms/LoginPage/LoginSubmitBtn";
import ResgistLinkBtn from "../Atoms/LoginPage/ResgistLinkBtn";
import Logo from "../Atoms/Logo";
import CustomInput from "../Molecules/CustomInput";

export default function LoginPageTemplate() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(false);
  const navigator = useNavigate();
  const dispatch = useAppDispatch();

  const loginBtnClickHandle = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    let ret = false;
    const userEmail = "nongnong";
    const userPassword = "1234";

    if (userEmail !== email || userPassword !== password) {
      alert("아이디와 비밀번호를 입력해주세요");
    } else {
      ret = true;
      dispatch(funcSetisLogin(ret));
    }

    if (!ret) {
      alert("이메일 또는 비밀번호 확인 부탁드립니다.");
      return;
    }
    navigator("/");
  };

  useEffect(() => {
    if (password && email) setFlag(true);
    else setFlag(false);
  }, [email, password]);

  return (
    <LoginPageTemplateStyle>
      <div className="login_logo_wrapper">
        <Logo />
      </div>
      <div className="login_input_container">
        <span className="login_input_title">이메일 로그인</span>
        <CustomInput type="text" placeholder="이메일" onChangeFunc={setEmail} />
        <CustomInput
          type="password"
          placeholder="비밀번호"
          onChangeFunc={setPassword}
        />
      </div>
      <div className="login_option_container">
        <CustomCheckBox text="로그인 상태 유지하기" />
        <ForgotPassWordLink />
      </div>
      <div className="login_submit_container">
        <LoginSubmitBtn
          style={
            flag
              ? {
                  backgroundColor: "#328EEF",
                  color: "white",
                }
              : {}
          }
          onClick={loginBtnClickHandle}
        />
        <ResgistLinkBtn />
      </div>
    </LoginPageTemplateStyle>
  );
}
