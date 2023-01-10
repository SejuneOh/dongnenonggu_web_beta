import { useEffect } from "react";
import { AppDiv } from "./AppStyle";
import { useAppDispatch, useAppSelector } from "./hooks/redux_hooks";
import { funcLogin, funcLogOut } from "./store/loginAction";
import AppRoutes from "./appRoutes";

function App() {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector((state) => state.login.isLogin);

  useEffect(() => {
    const token = sessionStorage.getItem("access_token");
    if (!token || token === "" || token === "undefined") {
      return;
    } else {
      dispatch(funcLogin());
    }
  }, [isLogin]);

  return (
    <AppDiv>
      <AppRoutes />
    </AppDiv>
  );
}

export default App;
