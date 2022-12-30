import { useEffect } from "react";
import { AppDiv } from "./AppStyle";
import { Cookies } from "react-cookie";
import { useAppDispatch } from "./hooks/redux_hooks";
import { funcSetisLogin } from "./store/loginAction";
import AppRoutes from "./appRoutes";

function App() {
  const cookie = new Cookies();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cookie.get("access_token")) {
      dispatch(funcSetisLogin(true));
    }

    return () => dispatch(funcSetisLogin(false));
  }, []);

  return (
    <AppDiv>
      <AppRoutes />
    </AppDiv>
  );
}

export default App;
