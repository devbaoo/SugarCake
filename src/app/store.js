import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import categoryReducer from "../features/category/categorySlice";
import userReducer from "../features/auth/userSlice";
import enquiryReducer from "../features/enquiry/enquirySlice";

export const store = configureStore({
	reducer: {
		auth: userReducer,
		product: productReducer,
		category: categoryReducer,
		enquiry: enquiryReducer,
	},
});
