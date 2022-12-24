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

function App() {
  const [isDark, setIsDark] = useState(false);
  const [mode, setMode] = useState<number>(0);
  const location = useLocation();
  const cookie = new Cookies();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }

    if (!location.pathname.includes("/post/")) {
      setMode(0);
      return;
    } else {
      setMode(1);
      setIsDark(false);
    }
  }, [location]);

  useEffect(() => {
    // if (cookie.get("auth_token")) {
    if (cookie.get("user_key")) {
      dispatch(funcSetisLogin(true));
    }
  }, []);

  return (
    <AppDiv>
      <Header isDark={isDark} mode={mode} />
      <Routes>
        {/* main */}
        <Route index element={<MainPage />} />
        {/* test */}
        <Route path="/test" element={<TestPage />} />
        {/* 인증을 반드시 하지 않아도 되는 접속 가능한 페이지 */}
        <Route element={<PrivateRoute authentication={false} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/post" element={<PostPage />} />
          <Route path="/post/register" element={<PostRegistPage />} />
          <Route path="/post/position" element={<PostSelectPositionPage />} />
          <Route path="/post/article" element={<PostArticlePage />} />
          <Route path="/guest/:id" element={<GuestPage />} />
          <Route path="/post/success" element={<SuccessPage />} />
          <Route path="/post/fail" element={<FailPage />} />
        </Route>
        <Route path="*" element={<MainPage />} />
      </Routes>
      {mode === 1 ? <StepFooter /> : <Footer />}
    </AppDiv>
  );
}

export default App;
