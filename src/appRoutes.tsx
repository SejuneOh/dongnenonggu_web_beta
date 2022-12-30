import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import RegisterPage from "./pages/RegisterPage";
import AccountLayout from "./layouts/AccountLayout";
import PostLayout from "./layouts/PostRegistLayout";
import GuestPage from "./pages/GuestPage";
import PostRegistPage from "./pages/PostRegistPage";
import PostSelectPositionPage from "./pages/PostSelectPositionPage";
import PostArticlePage from "./pages/PostArticlePage";
import SuccessPage from "./pages/SuccessPage";
import FailPage from "./pages/FailPage";
import PostGuestAndPricePage from "./pages/PostGuestAndPricePage";
import EditBoardPage from "./pages/EditBoardPage";

export default function AppRoutes(): JSX.Element {
  const mainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <MainPage /> },
      // { index: true, element: <PostGuestAndPricePage /> },
      { path: "*", element: <Navigate to="/" replace /> },
      {
        path: "post",
        element: <PostPage />,
      },

      {
        path: "article/:id",
        element: <GuestPage />,
      },
      {
        path: "test",
        element: <PostGuestAndPricePage />,
      },
      {
        path: "edit/:id",
        element: <EditBoardPage />,
      },
    ],
  };

  const accountRoutes = {
    path: "account",
    element: <AccountLayout />,
    children: [
      {
        path: "*",
        element: <LoginPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      { path: "register", element: <RegisterPage /> },
    ],
  };

  const postRegistRoutes = {
    path: "postregist",
    element: <PostLayout />,
    children: [
      { path: "*", element: <Navigate to="/post" /> },
      { path: "type", element: <PostRegistPage /> },
      { path: "position", element: <PostSelectPositionPage /> },
      { path: "guest", element: <PostGuestAndPricePage /> },
      { path: "description", element: <PostArticlePage /> },
      { path: "success", element: <SuccessPage /> },
      { path: "fail", element: <FailPage /> },
    ],
  };

  const routing = useRoutes([mainRoutes, accountRoutes, postRegistRoutes]);

  return <div>{routing}</div>;
}
