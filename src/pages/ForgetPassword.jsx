import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { forgetPasswordToken } from "../features/auth/userSlice";

const emailSchema = yup.object({
	email: yup
		.string()
		.email("Email should be valid")
		.required("Email is Required"),
});

const ForgetPassword = () => {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: emailSchema,
		onSubmit: (values) => {
			dispatch(forgetPasswordToken(values));
			setTimeout(() => {
				window.location.reload();
			}, 1200);
		},
	});
	return (
		<>
			<div className='signin-form-container password-form-container'>
				<div className='reset-password-title'>
					<h2>Reset Your Password</h2>
					<p>
						Enter your registered email address below, <br /> we
						will send you a reset password link on your registered
						mail.
					</p>
				</div>
				<div className='signin-form profile-update-form'>
					<form
						onSubmit={formik.handleSubmit}
						className='signin-form-fields'
						action='#'>
						<div className='form-field'>
							<label htmlFor='email' className='form-label'>
								Your email
							</label>
							<input
								type='email'
								name='email'
								id='email'
								className='form-input'
								placeholder='name@drstore.com'
								value={formik.values.email}
								onChange={formik.handleChange("email")}
								onBlur={formik.handleBlur("email")}
							/>
							<div className='error'>
								{formik.touched.email && formik.errors.email}
							</div>
						</div>

						<button type='submit' className='signin-button'>
							Send Reset Link
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default ForgetPassword;
