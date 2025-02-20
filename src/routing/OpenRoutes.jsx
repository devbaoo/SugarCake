import { Navigate } from "react-router-dom";

export const OpenRoutes = ({ children }) => {
	const getTokenFromLocaleStorate = JSON.parse(
		localStorage.getItem("customer")
	);
	return getTokenFromLocaleStorate?.token === undefined ? (
		children
	) : (
		<Navigate to={"/"} replace={true} />
	);
};
