import { useEffect } from "react";
import { AppDiv } from "./AppStyle";
import { Cookies } from "react-cookie";
import { useAppDispatch, useAppSelector } from "./hooks/redux_hooks";
import { funcLogin, funcLogOut } from "./store/loginAction";
import AppRoutes from "./appRoutes";

function App() {
  const cookie = new Cookies();
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector((state) => state.login.isLogin);

  useEffect(() => {
    const token = cookie.get("access_token");

    if (!token || token === "" || token === "undefined") {
      return;
    } else {
      dispatch(funcLogin());
    }

    return () => {
      dispatch(funcLogOut());
    };
  }, [isLogin]);

  return (
    <AppDiv>
      <AppRoutes />
    </AppDiv>
  );
}

export default App;
