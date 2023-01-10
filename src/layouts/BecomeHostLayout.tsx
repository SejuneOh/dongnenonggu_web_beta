import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import ExplainModal from "../components/Organisms/ExplainModal";
import HostHeader from "../components/Organisms/HostHeader";
import StepFooter from "../components/Organisms/StepFooter";
import { useLogin } from "../hooks/useLogin";

const BecomeHostLayoutStyled = styled.div``;

export default function BecomeHostLayout() {
  const [modalAcitve, setModalActive] = useState<boolean>(false);
  const isLogin = useLogin();

  return (
    <BecomeHostLayoutStyled>
      {isLogin ? (
        <>
          <HostHeader setModalActive={setModalActive} />
          <main>
            <Outlet />
          </main>
          <StepFooter />
          {modalAcitve && <ExplainModal setModalActive={setModalActive} />}
        </>
      ) : (
        <Navigate to="/" />
      )}
    </BecomeHostLayoutStyled>
  );
}
