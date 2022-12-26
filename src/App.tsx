import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AppDiv } from "./AppStyle";
import { Cookies } from "react-cookie";
import Footer from "./components/Organisms/Footer";
import Header from "./components/Organisms/Header";
import StepFooter from "./components/Organisms/StepFooter";
import PrivateRoute from "./components/Templates/PrivateRoute";
import GuestPage from "./pages/GuestPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import PostArticlePage from "./pages/PostArticlePage";
import PostPage from "./pages/PostPage";
import PostRegistPage from "./pages/PostRegistPage";
import PostSelectPositionPage from "./pages/PostSelectPositionPage";
import RegisterPage from "./pages/RegisterPage";
import { useAppDispatch } from "./hooks/redux_hooks";
import { funcSetisLogin } from "./store/loginAction";
import SuccessPage from "./pages/SuccessPage";
import FailPage from "./pages/FailPage";
import TestPage from "./pages/TestPage";
import AppRoutes from "./appRoutes";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [mode, setMode] = useState<number>(0);
  const location = useLocation();
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
