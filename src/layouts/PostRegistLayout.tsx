import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import StepFooter from "../components/Organisms/StepFooter";
import { useAppSelector } from "../hooks/redux_hooks";

const PostRegistLayout = (): JSX.Element => {
  const isLogin = useAppSelector((state) => state.login.isLogin);
  const [footerActive, setFooterActive] = useState<boolean>(false);
  const { pathname } = useLocation();

  const registUrl = ["/postregist/success", "/postregist/fail"];

  useEffect(() => {
    setFooterActive(!registUrl.includes(pathname));
  }, [pathname]);

  return (
    <>
      {isLogin ? <Outlet /> : <Navigate to="/post" />}
      {footerActive ? <StepFooter /> : null}
    </>
  );
};

export default PostRegistLayout;
