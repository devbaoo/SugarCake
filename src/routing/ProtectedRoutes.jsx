import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
	const getTokenFromLocaleStorate = JSON.parse(
		localStorage.getItem("customer")
	);
	return getTokenFromLocaleStorate?.token !== undefined ? (
		children
	) : (
		<Navigate to={"/sign-in"} replace={true} />
	);
};
