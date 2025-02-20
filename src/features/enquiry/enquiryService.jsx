import axios from "axios";
import { base_url } from "../../utils/base_url";

const createEnquiry = async (enqData) => {
	try {
		const response = await axios.post(`${base_url}contact/`, enqData);
		return response.data;
	} catch (error) {
		console.error("Error in creating enquiry:", error);
		throw error;
	}
};

const enquiryService = {
	createEnquiry,
};
export default enquiryService;
