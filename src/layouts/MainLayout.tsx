import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "../components/Organisms/Footer";
import Header from "../components/Organisms/Header";
import { useAppSelector } from "../hooks/redux_hooks";

export default function MainLayout() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const { pathname } = useLocation();
  const isLogin = useAppSelector((state) => state.login.isLogin);
  useEffect(() => {
    if (pathname !== "/") setIsDark(true);
    else setIsDark(false);
  }, [pathname]);

  return (
    <>
      <Header isDark={isDark} mode={0} />
      {pathname === "/" ? (
        <Outlet />
      ) : isLogin ? (
        <Outlet />
      ) : (
        <Navigate to="/" />
      )}
      <Footer />
    </>
  );
}
