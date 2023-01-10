import { Navigate, useRoutes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import RegisterPage from "./pages/RegisterPage";
import PostLayout from "./layouts/PostRegistLayout";
import GuestPage from "./pages/GuestPage";
import PostRegistPage from "./pages/PostRegistPage";
import PostSelectPositionPage from "./pages/PostSelectPositionPage";
import PostArticlePage from "./pages/PostArticlePage";
import SuccessPage from "./pages/SuccessPage";
import FailPage from "./pages/FailPage";
import PostGuestAndPricePage from "./pages/PostGuestAndPricePage";
import EditBoardPage from "./pages/EditBoardPage";
import Layout from "./layouts/Layout";

export default function AppRoutes(): JSX.Element {
  const mainRoutes = {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "*", element: <Navigate to="/" /> },
      {
        path: "post",
        element: <PostPage />,
      },
    ],
  };

  const postRoutes = {
    path: "post",
    element: <Layout />,
    children: [
      { path: "article/:id", element: <GuestPage /> },
      { path: "edit/:id", element: <EditBoardPage /> },
    ],
  };

  const accountRoutes = {
    path: "account",
    element: <Layout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "regist", element: <RegisterPage /> },
    ],
  };

  // const accountRoutes = {
  //   path: "account",
  //   element: <AccountLayout />,
  //   children: [
  //     {
  //       path: "*",
  //       element: <LoginPage />,
  //     },
  //     {
  //       path: "login",
  //       element: <LoginPage />,
  //     },
  //     { path: "register", element: <RegisterPage /> },
  //   ],
  // };

  // const postRegistRoutes = {
  //   path: "postregist",
  //   element: <PostLayout />,
  //   children: [
  //     { path: "*", element: <Navigate to="/post" /> },
  //     { path: "type", element: <PostRegistPage /> },
  //     { path: "position", element: <PostSelectPositionPage /> },
  //     { path: "guest", element: <PostGuestAndPricePage /> },
  //     { path: "description", element: <PostArticlePage /> },
  //     { path: "success", element: <SuccessPage /> },
  //     { path: "fail", element: <FailPage /> },
  //   ],
  // };

  const routing = useRoutes([mainRoutes, accountRoutes, postRoutes]);

  return <div>{routing}</div>;
}
