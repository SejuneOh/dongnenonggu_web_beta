import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";

interface PrivateRouteProps {
	authentication: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ authentication }) => {
	const isLogin = useAppSelector(state => state.login.isLogin);

	// 인증이 필요한 페이지
	if (authentication) {
		return isLogin === null || isLogin === false ? (
			<Navigate to="/login" />
		) : (
			<Outlet />
		);
	} else {
		return isLogin === null || isLogin === false ? (
			<Outlet />
		) : (
			<Navigate to="/" />
		);
	}
	return <></>;
};

export default PrivateRoute;
