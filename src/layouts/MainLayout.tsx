import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Organisms/Footer";
import Header from "../components/Organisms/Header";
import { useLogin } from "../hooks/useLogin";
import { LayoutStyle } from "./Layout";

export default function MainLayout() {
	const isLogin = useLogin();
	const { pathname } = useLocation();
	useEffect(() => {
		console.log(pathname);
	}, [pathname]);

	return (
		<LayoutStyle>
			<Header isDark={true} mode={0} />
			<main>
				{pathname === "/" ? (
					<Outlet />
				) : isLogin && pathname.includes("post") ? (
					<Outlet />
				) : (
					<Navigate to="/" />
				)}
			</main>
			<Footer />
		</LayoutStyle>
	);
}
