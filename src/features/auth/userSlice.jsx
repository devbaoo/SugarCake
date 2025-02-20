import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";
import { toast } from "react-toastify";

const getCustomerFromLocalStorage = localStorage.getItem("customer")
	? JSON.parse(localStorage.getItem("customer"))
	: null;

const initialState = {
	user: getCustomerFromLocalStorage,
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: "",
};

export const registerUser = createAsyncThunk(
	"auth/user-register",
	async (userData, thunkAPI) => {
		try {
			return await userService.registerUser(userData);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const loginUser = createAsyncThunk(
	"auth/user-login",
	async (userData, thunkAPI) => {
		try {
			return await userService.loginUser(userData);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const getWishlistItems = createAsyncThunk(
	"auth/wishlist",
	async (thunkAPI) => {
		try {
			return await userService.getWishlistItems();
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const addToCart = createAsyncThunk(
	"auth/cart",
	async (cartData, thunkAPI) => {
		try {
			return await userService.addToCart(cartData);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const getCart = createAsyncThunk("auth/get-cart", async (thunkAPI) => {
	try {
		return await userService.getCart();
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const emptyCart = createAsyncThunk(
	"auth/empty-cart",
	async (thunkAPI) => {
		try {
			return await userService.emptyCart();
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const removeCartItem = createAsyncThunk(
	"auth/remove-cart-product",
	async (id, thunkAPI) => {
		try {
			return await userService.removeCartItem(id);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const updateCartQty = createAsyncThunk(
	"auth/update-cart-product",
	async (updatedData, thunkAPI) => {
		try {
			return await userService.updateCartQty(updatedData);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const createOrder = createAsyncThunk(
	"auth/cart/create-order",
	async (orderData, thunkAPI) => {
		try {
			return await userService.createOrder(orderData);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const getUserOrders = createAsyncThunk(
	"auth/order/get-orders",
	async (thunkAPI) => {
		try {
			return await userService.getUserOrders();
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const updateProfile = createAsyncThunk(
	"auth/update-user",
	async (data, thunkAPI) => {
		try {
			return await userService.updateProfile(data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const forgetPasswordToken = createAsyncThunk(
	"user/password/token",
	async (data, thunkAPI) => {
		try {
			return await userService.forgetPasswordToken(data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const resetPassword = createAsyncThunk(
	"user/password/reset",
	async (data, thunkAPI) => {
		try {
			return await userService.resetPassword(data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const userSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.registedUser = action.payload;
				state.message = "Success";
				if (state.isSuccess === true) {
					toast.success("Account Created Succuessfully");
					alert(
						"You have successfully registered! Please verify your email, Verification Link has been sended to your mail address!"
					);
				}
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
				if (state.isError === true) {
					toast.error(action.payload.response.data.message);
				}
			})
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.user = action.payload;
				state.message = "Success";
				if (state.isSuccess === true) {
					localStorage.setItem("token", action.payload.token);
					toast.success("Logged in Succuessfully");
				}
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
				if (state.isError === true) {
					toast.error(action?.payload?.response?.data?.message);
				}
			})
			.addCase(getWishlistItems.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getWishlistItems.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.wishlist = action.payload;
				state.message = "Success";
			})
			.addCase(getWishlistItems.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
			})
			.addCase(addToCart.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addToCart.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.cardProduct = action.payload;
				state.message = "Success";
				if (state.isSuccess === true) {
					toast.success("Product Added to Cart Succuessfully");
				}
			})
			.addCase(addToCart.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
				if (state.isError === true) {
					toast.error("Something Went Wrong!");
				}
			})
			.addCase(getCart.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getCart.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.getCart = action.payload;
				state.message = "Success";
			})
			.addCase(getCart.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
			})
			.addCase(emptyCart.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(emptyCart.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.emptyCart = action.payload;
				state.message = "Success";
			})
			.addCase(emptyCart.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
			})
			.addCase(removeCartItem.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(removeCartItem.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.removedCartItem = action.payload;
				state.message = "Success";
				if (state.isSuccess === true) {
					toast.success("Product Removed from Cart Succuessfully");
				}
			})
			.addCase(removeCartItem.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
				if (state.isError === true) {
					toast.error("Something Went Wrong!");
				}
			})
			.addCase(updateCartQty.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateCartQty.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.updatedCartItem = action.payload;
				state.message = "Success";
				if (state.isSuccess === true) {
					toast.success("Product Quantity updated Succuessfully");
				}
			})
			.addCase(updateCartQty.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
				if (state.isError === true) {
					toast.error("Something Went Wrong!");
				}
			})
			.addCase(createOrder.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createOrder.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.createdOrder = action.payload;
				state.message = "Success";
				if (state.isSuccess === true) {
					toast.success("Ordered Successfull!");
				}
			})
			.addCase(createOrder.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
				if (state.isError === true) {
					toast.error("Something Went Wrong!");
				}
			})
			.addCase(getUserOrders.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getUserOrders.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.userOrders = action.payload;
			})
			.addCase(getUserOrders.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
			})
			.addCase(updateProfile.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateProfile.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.updatedUser = action.payload;
				state.message = "Success";
				if (state.isSuccess === true) {
					toast.success("Details Updated Successfull!");
				}
			})
			.addCase(updateProfile.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
				if (state.isError === true) {
					toast.error("Something Went Wrong!");
				}
			})
			.addCase(forgetPasswordToken.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(forgetPasswordToken.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.token = action.payload;
				state.message = "Success";
				if (state.isSuccess === true) {
					toast.success("Reset Link Sended Successfull!");
				}
			})
			.addCase(forgetPasswordToken.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
				if (state.isError === true) {
					toast.error("Something Went Wrong!");
				}
			})
			.addCase(resetPassword.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(resetPassword.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.resetPassword = action.payload;
				state.message = "Success";
				if (state.isSuccess === true) {
					toast.success("Password Updated Successfull!");
				}
			})
			.addCase(resetPassword.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
				if (state.isError === true) {
					toast.error("Something Went Wrong!");
				}
			});
	},
});

export default userSlice.reducer;
