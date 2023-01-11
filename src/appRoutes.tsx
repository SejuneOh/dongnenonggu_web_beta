import { Navigate, useRoutes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import RegisterPage from "./pages/RegisterPage";
import GuestPage from "./pages/GuestPage";
import PostRegistPage from "./pages/PostRegistPage";
import PostSelectPositionPage from "./pages/PostSelectPositionPage";
import PostArticlePage from "./pages/PostArticlePage";
import SuccessPage from "./pages/SuccessPage";
import FailPage from "./pages/FailPage";
import PostGuestAndPricePage from "./pages/PostGuestAndPricePage";
import EditBoardPage from "./pages/EditBoardPage";
import Layout from "./layouts/Layout";
import NotFoundPage from "./pages/404Page";
import BecomeHostLayout from "./layouts/BecomeHostLayout";
import MainLayout from "./layouts/MainLayout";
import PostLayout from "./layouts/PostLayout";

export default function AppRoutes(): JSX.Element {
  const mainRoutes = {
    path: "/",
    // element: <Layout />,
    element: <MainLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  };

  const postRoutes = {
    path: "post",
    element: <PostLayout />,
    children: [
      { index: true, element: <PostPage /> },
      { path: "*", element: <NotFoundPage /> },
      { path: "article/:id", element: <GuestPage /> },
      { path: "edit/:id", element: <EditBoardPage /> },
    ],
  };

  const accountRoutes = {
    path: "account",
    element: <Layout />,
    children: [
      { path: "*", element: <NotFoundPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "regist", element: <RegisterPage /> },
    ],
  };

  const postRegistRoutes = {
    path: "become-host",
    element: <BecomeHostLayout />,
    children: [
      { path: "*", element: <NotFoundPage /> },
      { path: "type", element: <PostRegistPage /> },
      { path: "position", element: <PostSelectPositionPage /> },
      { path: "guest", element: <PostGuestAndPricePage /> },
      { path: "description", element: <PostArticlePage /> },
      { path: "success", element: <SuccessPage /> },
      { path: "fail", element: <FailPage /> },
    ],
  };

  const routing = useRoutes([
    mainRoutes,
    accountRoutes,
    postRoutes,
    postRegistRoutes,
  ]);

  return <div>{routing}</div>;
}
