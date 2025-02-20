import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import enquiryService from "./enquiryService";
import { toast } from "react-toastify";

export const createEnquiry = createAsyncThunk(
	"contact/enquiry",
	async (enqData, thunkAPI) => {
		try {
			return await enquiryService.createEnquiry(enqData);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const initialState = {
	enquiry: [],
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: "",
};

export const enquirySlice = createSlice({
	name: "enquiry",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createEnquiry.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createEnquiry.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.createdEnquiry = action.payload;
				if (state.isSuccess === true) {
					toast.success("Message Sended Succuessfully");
					alert(
						"We have received your enquiry. We will resolve your issue within 24 hours."
					);
				}
			})
			.addCase(createEnquiry.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
				if (state.isError === true) {
					toast.error("Something Went Wrong.");
				}
			});
	},
});
export default enquirySlice.reducer;
