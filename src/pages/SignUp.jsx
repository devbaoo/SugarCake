import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/auth/userSlice";
import MetaTitle from "../components/MetaTitle";

const signUpSchema = yup.object({
	name: yup.string().required("Name is Required"),
	mobile: yup.string().required("Mobile No. is Required"),
	email: yup
		.string()
		.email("Email should be valid")
		.required("Email is Required"),
	password: yup.string().required("Password is Required"),
});

const SignUp = () => {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			name: "",
			mobile: "",
			email: "",
			password: "",
		},
		validationSchema: signUpSchema,
		onSubmit: (values) => {
			dispatch(registerUser(values));
		},
	});
	return (
		<>
			<MetaTitle title={"Create your Account"} />
			<div className='signup-container'>
				<div className='container'>
					<section className='signin-section'>
						<div className='signin-container'>
							<a href='/' className='signin-logo'>
								<img
									className='logo-icon'
									src='./images/logo.png'
									alt='logo'
								/>
								Sugar Silk Cake
							</a>
							<div className='signin-form-container'>
								<div className='signin-form'>
									<h1 className='signin-title'>
										Sign up Here
									</h1>
									<form
										className='signin-form-fields'
										action='#'
										onSubmit={formik.handleSubmit}>
										<div className='form-field'>
											<label
												htmlFor='email'
												className='form-label'>
												Your Name
											</label>
											<input
												type='text'
												name='name'
												id='name'
												className='form-input'
												placeholder='Full Name'
												value={formik.values.name}
												onChange={formik.handleChange(
													"name"
												)}
												onBlur={formik.handleBlur(
													"name"
												)}
											/>
											<div className='error'>
												{formik.touched.name &&
													formik.errors.name}
											</div>
										</div>
										<div className='form-field'>
											<label
												htmlFor='email'
												className='form-label'>
												Phone Number
											</label>
											<input
												type='number'
												name='mobile'
												id='mobile'
												className='form-input'
												placeholder='+0945337450'
												value={formik.values.mobile}
												onChange={formik.handleChange(
													"mobile"
												)}
												onBlur={formik.handleBlur(
													"mobile"
												)}
											/>
											<div className='error'>
												{formik.touched.mobile &&
													formik.errors.mobile}
											</div>
										</div>
										<div className='form-field'>
											<label
												htmlFor='email'
												className='form-label'>
												Your email
											</label>
											<input
												type='email'
												name='email'
												id='email'
												className='form-input'
												placeholder='name@sugarsilkcake.com'
												value={formik.values.email}
												onChange={formik.handleChange(
													"email"
												)}
												onBlur={formik.handleBlur(
													"email"
												)}
											/>
											<div className='error'>
												{formik.touched.email &&
													formik.errors.email}
											</div>
										</div>
										<div className='form-field'>
											<label
												htmlFor='password'
												className='form-label'>
												Password
											</label>
											<input
												type='password'
												name='password'
												id='password'
												placeholder='••••••••'
												className='form-input'
												value={formik.values.password}
												onChange={formik.handleChange(
													"password"
												)}
												onBlur={formik.handleBlur(
													"password"
												)}
											/>
											<div className='error'>
												{formik.touched.password &&
													formik.errors.password}
											</div>
										</div>
										<div className='form-checkbox'>
											<input
												id='remember'
												aria-describedby='remember'
												type='checkbox'
												className='checkbox-input'
											/>
											<label
												htmlFor='remember'
												className='checkbox-label'>
												Remember me
											</label>
										</div>
										<button
											type='submit'
											className='signin-button'>
											Sign up
										</button>
										<p className='signup-text'>
											Already have an account?{" "}
											<a
												href='/sign-in'
												className='signup-link'>
												Sign in
											</a>
										</p>
									</form>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default SignUp;
