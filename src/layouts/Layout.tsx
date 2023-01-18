import { Navigate, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Organisms/Footer";
import Header from "../components/Organisms/Header";
import { useLogin } from "../hooks/useLogin";

export const LayoutStyle = styled.div`
	& > main {
		margin-top: 6.2rem;
	}
`;

export default function Layout() {
	const islogin = useLogin();
	const { pathname } = useLocation();

	return (
		<LayoutStyle>
			<Header isDark={true} mode={0} />
			<main>
				{!islogin && pathname.includes("account") ? (
					<Outlet />
				) : (
					<Navigate to="/" />
				)}
			</main>
			<Footer />
		</LayoutStyle>
	);
}
