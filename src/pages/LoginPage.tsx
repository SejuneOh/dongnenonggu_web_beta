import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginPageTemplate from "../components/Templates/LoginPageTemplate";
import { useAppSelector } from "../hooks/redux_hooks";

const LoginPageStyle = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: var(--white);
`;

export default function LoginPage() {
  const isLogin: boolean = useAppSelector((state) => state.login.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    // if (isLogin) navigate("/");
  }, []);

  return (
    <LoginPageStyle>
      <LoginPageTemplate />
    </LoginPageStyle>
  );
}
