import styled from "styled-components";
import RegisterPageTemplate from "../components/Templates/RegisterPageTemplate";

const RegisterPageStyle = styled.section`
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

export default function RegisterPage() {
  return (
    <RegisterPageStyle>
      <RegisterPageTemplate />
    </RegisterPageStyle>
  );
}
