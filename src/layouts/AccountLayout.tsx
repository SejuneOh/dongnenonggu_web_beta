import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux_hooks";

interface Props {
  authentiaction: boolean;
}

const AccountLayout = (): JSX.Element => {
  const isLogin = useAppSelector((state) => state.login.isLogin);
  return <>{isLogin ? <Navigate to="/" /> : <Outlet />}</>;
};

export default AccountLayout;
