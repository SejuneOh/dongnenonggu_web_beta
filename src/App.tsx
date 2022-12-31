import { useEffect } from "react";
import { AppDiv } from "./AppStyle";
import { Cookies } from "react-cookie";
import { useAppDispatch } from "./hooks/redux_hooks";
import { funcLogin, funcLogOut } from "./store/loginAction";
import AppRoutes from "./appRoutes";

function App() {
  const cookie = new Cookies();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = cookie.get("auth_token");
    if (!token || token === "") return;

    dispatch(funcLogin());

    return () => {
      dispatch(funcLogOut());
    };
  }, []);

  return (
    <AppDiv>
      <AppRoutes />
    </AppDiv>
  );
}

export default App;
