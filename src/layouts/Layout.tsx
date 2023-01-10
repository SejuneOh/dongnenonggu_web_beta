import { Navigate, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Organisms/Footer";
import Header from "../components/Organisms/Header";
import { useLogin } from "../hooks/useLogin";

const LayoutStyle = styled.div`
  & > main {
    margin-top: 6.2rem;
  }
`;

export default function Layout() {
  const islogin = useLogin();
  const { pathname } = useLocation();

  return (
    <LayoutStyle>
      <Header isDark={true} mode={0} />
      <main>
        {pathname === "/" ? (
          <Outlet />
        ) : islogin &&
          pathname !== "/account/login" &&
          pathname !== "account/regist" ? (
          <Outlet />
        ) : !islogin &&
          (pathname === "/account/login" || pathname === "/account/regist") ? (
          <Outlet />
        ) : (
          <Navigate to={pathname} />
        )}
      </main>
      <Footer />
    </LayoutStyle>
  );
}
