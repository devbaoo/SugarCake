import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/userSlice";
import { useNavigate } from "react-router-dom";
import MetaTitle from "../components/MetaTitle";

const loginSchema = yup.object({
	email: yup
		.string()
		.email("Email should be valid")
		.required("Email is Required"),
	password: yup.string().required("Password is Required"),
});

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: loginSchema,
		onSubmit: (values) => {
			dispatch(loginUser(values));
		},
	});
	const loggedInUser = useSelector((state) => state.auth);

	if (loggedInUser?.isSuccess) {
		setTimeout(() => {
			navigate("/");
			window.location.reload();
		}, 800);
	}

	return (
		<>
			<MetaTitle title={"Login to your account"} />
			<div className='login-container'>
				<div className='container'>
					<section className='signin-section'>
						<div className='signin-container'>
							<a href='/' className='signin-logo'>
								{/* <img
									className='logo-icon'
									src='./images/logo.png'
									alt='logo'
<<<<<<< HEAD
								/> */}
=======
								/>
>>>>>>> d03811523679a36388f7691bde395d1d59fb1ce9
								Sugar Cake
							</a>
							<div className='signin-form-container'>
								<div className='signin-form'>
									<h1 className='signin-title'>
										Sign in to your account
									</h1>
									<form
										onSubmit={formik.handleSubmit}
										className='signin-form-fields'
										action='#'>
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
												placeholder='name@drstore.com'
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
										<Link
											to={"/forget-password"}
											className='forgot-password-link'>
											Forgot password?
										</Link>
										<button
											type='submit'
											className='signin-button'>
											Sign in
										</button>
										<p className='signup-text'>
											Don’t have an account yet?{" "}
											<Link
												to={"/sign-up"}
												className='signup-link'>
												Sign up
											</Link>
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

export default Login;
