import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";

export const getProducts = createAsyncThunk(
	"product/get-products",
	async (thunkAPI) => {
		try {
			return await productService.getProducts();
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const getProduct = createAsyncThunk(
	"product/product",
	async (productId, thunkAPI) => {
		try {
			return await productService.getProduct(productId);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const addToWishlist = createAsyncThunk(
	"product/wishlist",
	async (productId, thunkAPI) => {
		try {
			return await productService.addToWishlist(productId);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const rateProduct = createAsyncThunk(
	"product/rating",
	async (data, thunkAPI) => {
		try {
			return await productService.rateProduct(data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const initialState = {
	products: [],
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: "",
};

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.products = action.payload;
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
			})
			.addCase(getProduct.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProduct.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.product = action.payload;
			})
			.addCase(getProduct.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
			})
			.addCase(addToWishlist.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addToWishlist.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.message = "Product added to Wishlist!";
				state.addedToWishlist = action.payload;
			})
			.addCase(addToWishlist.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
			})
			.addCase(rateProduct.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(rateProduct.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.message = "Success";
				state.rating = action.payload;
				if (state.isSuccess === true) {
					toast.success("Rated Successfully!");
				}
			})
			.addCase(rateProduct.rejected, (state, action) => {
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
export default productSlice.reducer;
