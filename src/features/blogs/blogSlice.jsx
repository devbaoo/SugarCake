import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";

// Fetch all blogs
export const getBlogs = createAsyncThunk(
    "blog/get-blogs",
    async (thunkAPI) => {
        try {
            return await blogService.getBlogs();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// Fetch a single blog by its ID
export const getBlog = createAsyncThunk(
    "blog/get-blog",
    async (blogId, thunkAPI) => {
        try {
            return await blogService.getBlog(blogId);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// Initial state
const initialState = {
    blogs: [],  // Array to store all blogs
    blog: {},   // Object to store a single blog for detail page
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handling the "getBlogs" action (fetching all blogs)
            .addCase(getBlogs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.blogs = action.payload;  // Correctly store all blogs in the `blogs` array
            })
            .addCase(getBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })

            // Handling the "getBlog" action (fetching a single blog)
            .addCase(getBlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.blog = action.payload;  // Store the single blog
            })
            .addCase(getBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            });
    }
});

export default blogSlice.reducer;