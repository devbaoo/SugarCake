import axios from "axios";
import { base_url } from "../../utils/base_url";

const getBlogs = async () => {
    try {
        const response = await axios.get(`${base_url}blog`);
        return response.data;
    } catch (error) {
        console.error("Error fetching blog:", error);
        throw error;
    }
};
const getBlog = async (blogId) => {
    try {
        const response = await axios.get(`${base_url}blog/${blogId}`);
        return response.data;
    } catch (error) {
        console.error("Error in fetching blog:", error);
        throw error;
    }
}

const blogService = {
    getBlogs,
    getBlog,
};
export default blogService;