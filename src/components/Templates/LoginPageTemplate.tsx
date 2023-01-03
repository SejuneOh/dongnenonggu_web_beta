import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { funcSignIn } from "../../api/user.api";
import { useAppDispatch } from "../../hooks/redux_hooks";
import { funcLogin } from "../../store/loginAction";
import { LoginPageTemplateStyle } from "../../styles/loginPageTemplateStyle";
import CustomCheckBox from "../Atoms/LoginPage/CustomCheckBox";
import ForgotPassWordLink from "../Atoms/LoginPage/ForgotPassWordLink";
import LoginSubmitBtn from "../Atoms/LoginPage/LoginSubmitBtn";
import RegistLink from "../Atoms/LoginPage/ResgistLink";
import Logo from "../Atoms/Logo";
import CustomInput from "../Molecules/CustomInput";

export default function LoginPageTemplate() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const funcTryLogin = async () => {
    if (flag) {
      // login api 호출
      const ret = await funcSignIn(email, password);

      if (ret?.success) {
        dispatch(funcLogin());
        navigate("/");
      } else {
        alert("아이디와 비밀번호를 확인해주세요");
      }
    } else {
      alert("아이디와 비밀번호를 모두 작성해주세요");
    }
  };

  const keyupPressEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") funcTryLogin();
  };

  const loginBtnClickHandle = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    funcTryLogin();
  };

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const name = e.currentTarget.name;

      if (name === "loginEmail") {
        setEmail(e.currentTarget.value);
      } else {
        setPassword(e.currentTarget.value);
      }

      if (email && password) setFlag(true);
      else setFlag(false);
    },
    [email, password]
  );

  return (
    <LoginPageTemplateStyle>
      <div className="login_logo_wrapper">
        <Logo />
      </div>
      <div className="login_input_container">
        <span className="login_input_title">이메일 로그인</span>
        <CustomInput
          name="loginEmail"
          type="text"
          placeholder="이메일"
          onChangeFunc={onChange}
          onKeyUp={keyupPressEnter}
        />
        <CustomInput
          name="loginPassword"
          type="password"
          placeholder="비밀번호"
          onChangeFunc={onChange}
          onKeyUp={keyupPressEnter}
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
        <RegistLink />
      </div>
    </LoginPageTemplateStyle>
  );
}
