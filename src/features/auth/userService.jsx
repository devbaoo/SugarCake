import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const registerUser = async (userData) => {
	try {
		const response = await axios.post(`${base_url}user/register`, userData);
		return response.data;
	} catch (error) {
		console.error("Error in registering user :", error);
		throw error;
	}
};
const loginUser = async (userData) => {
	try {
		const response = await axios.post(`${base_url}user/login`, userData);
		if (response.data) {
			localStorage.setItem("customer", JSON.stringify(response.data));
		}
		return response.data;
	} catch (error) {
		console.error("Error in logging in user :", error);
		throw error;
	}
};
const getWishlistItems = async () => {
	try {
		const response = await axios.get(`${base_url}user/wishlist`, config);

		return response.data;
	} catch (error) {
		console.error("Error in logging in user :", error);
		throw error;
	}
};
const addToCart = async (cartData) => {
	try {
		const response = await axios.post(
			`${base_url}user/cart`,
			cartData,
			config
		);
		return response.data;
	} catch (error) {
		console.error("Error in adding to cart :", error);
		throw error;
	}
};
const getCart = async () => {
	try {
		const response = await axios.get(`${base_url}user/cart`, config);
		return response.data;
	} catch (error) {
		console.error("Error in getting to cart items :", error);
		throw error;
	}
};
const emptyCart = async () => {
	try {
		const response = await axios.delete(
			`${base_url}user/empty-cart`,
			config
		);
		return response.data;
	} catch (error) {
		console.error("Error in deleting cart :", error);
		throw error;
	}
};
const removeCartItem = async (id) => {
	try {
		const response = await axios.delete(
			`${base_url}user/remove-cart-product/${id}`,
			config
		);
		return response.data;
	} catch (error) {
		console.error("Error in deleting cart product :", error);
		throw error;
	}
};
const updateCartQty = async (updatedData) => {
	try {
		const response = await axios.delete(
			`${base_url}user/update-cart-product/${updatedData?.pId}/${updatedData?.quantity}`,
			config
		);
		return response.data;
	} catch (error) {
		console.error("Error in updating cart product :", error);
		throw error;
	}
};
const createOrder = async (orderData) => {
	try {
		const response = await axios.post(
			`${base_url}user/cart/create-order`,
			orderData,
			config
		);
		return response.data;
	} catch (error) {
		console.error("Error in creating Order:", error);
		throw error;
	}
};
const getUserOrders = async () => {
	try {
		const response = await axios.get(`${base_url}user/get-orders`, config);
		return response.data;
	} catch (error) {
		console.error("Error in getting Orders:", error);
		throw error;
	}
};
// update user details

const updateProfile = async (data) => {
	try {
		const response = await axios.put(
			`${base_url}user/update-user`,
			data,
			config
		);
		return response.data;
	} catch (error) {
		console.error("Error in updating details:", error);
		throw error;
	}
};
// forget password

const forgetPasswordToken = async (data) => {
	try {
		const response = await axios.post(
			`${base_url}user/forgot-password-token`,
			data
		);
		return response.data;
	} catch (error) {
		console.error("Error in reset password link:", error);
		throw error;
	}
};
const resetPassword = async (data) => {
	try {
		const response = await axios.put(
			`${base_url}user/reset-password/${data?.token}`,
			{ password: data?.password }
		);
		return response.data;
	} catch (error) {
		console.error("Error in reset password :", error);
		throw error;
	}
};

const userService = {
	registerUser,
	loginUser,
	getWishlistItems,
	addToCart,
	getCart,
	emptyCart,
	removeCartItem,
	updateCartQty,
	createOrder,
	getUserOrders,
	updateProfile,
	forgetPasswordToken,
	resetPassword,
};
export default userService;
