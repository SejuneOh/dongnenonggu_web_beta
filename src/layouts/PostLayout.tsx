import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Organisms/Footer";
import Header from "../components/Organisms/Header";
import { useLogin } from "../hooks/useLogin";
import { LayoutStyle } from "./Layout";

export default function PostLayout() {
  const isLogin = useLogin();
  const { pathname } = useLocation();
  return (
    <LayoutStyle>
      <Header isDark={true} mode={0} />
      {!pathname.includes("post") ? (
        <Navigate to="/" />
      ) : isLogin ? (
        <Outlet />
      ) : (
        <Navigate to="/post" />
      )}
      <Footer />
    </LayoutStyle>
  );
}
