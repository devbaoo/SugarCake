import axios from "axios";
import { base_url } from "../utils/base_url";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyMail = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const id = location.pathname.split("/")[2];
	const verifyHandler = async () => {
		try {
			const response = await axios.put(`${base_url}user/verify/${id}`);
			if (response.data?.success) {
				toast.success(response.data?.message);
				setTimeout(() => {
					navigate("/sign-in");
				}, 600);
			}
		} catch (error) {
			console.error("Verification failed:", error);
		}
	};

	return (
		<>
			<div className='verify-container'>
				<div className='container mail-section'>
					<div className='verify-mail'>
						<h2>Confirm Your Email Address</h2>
						<p>
							Tap the button below to confirm your email address.
							If you didn't create an account, you can safely
							ignore this email.
						</p>
						<button onClick={verifyHandler}>Verify Email</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default VerifyMail;
