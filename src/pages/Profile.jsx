import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Orders from "./Orders";
import { useFormik } from "formik";
import * as yup from "yup";
import { updateProfile } from "../features/auth/userSlice";
import ForgetPassword from "./ForgetPassword";
import MetaTitle from "../components/MetaTitle";

const profileUpdateSchema = yup.object({
	email: yup
		.string()
		.email("Email should be valid")
		.required("Email is Required"),
	name: yup.string().required("Name is Required"),
	mobile: yup.string().required("Mobile is Required"),
});

const Profile = () => {
	const dispatch = useDispatch();
	const loggedUser = useSelector((state) => state.auth.user);

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			mobile: "",
		},
		validationSchema: profileUpdateSchema,
		onSubmit: (values) => {
			dispatch(updateProfile(values));
		},
	});

	return (
		<>
			<MetaTitle title={`Your Profile: ${loggedUser?.name}`} />
			<div className='profile-container'>
				<div className='container'>
					<h1 className='profile-title'>My Profile</h1>
					<p className='profile-name'>Welcome {loggedUser?.name}</p>
					<div className='profile-tabs'>
						<Tabs>
							<TabList className='profile-tablist'>
								<Tab>My Details</Tab>
								<Tab>My Orders</Tab>
								<Tab>Update Profile</Tab>
								<Tab>Change Password</Tab>
							</TabList>

							<TabPanel>
								<div className='profile-details'>
									<div className='profile-items'>
										<span>Name:</span>
										<h3>{loggedUser?.name}</h3>
									</div>
									<div className='profile-items'>
										<span>Email:</span>
										<h3>{loggedUser?.email}</h3>
									</div>
									<div className='profile-items'>
										<span>Mobile:</span>
										<h3>{loggedUser?.mobile}</h3>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<Orders />
							</TabPanel>
							<TabPanel>
								<div className='signin-form-container password-form-container'>
									<div className='reset-password-title'>
										<h1>Update Your Profile Details</h1>
										<p>
											Enter your new details below which
											you want to update!
										</p>
									</div>
									<div className='signin-form profile-update-form'>
										<form
											onSubmit={formik.handleSubmit}
											className='signin-form-fields'
											action='#'>
											<div className='form-field'>
												<label
													htmlFor='name'
													className='form-label'>
													Full Name
												</label>
												<input
													type='text'
													name='name'
													id='name'
													className='form-input'
													placeholder='full name'
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
													htmlFor='mobile'
													className='form-label'>
													Mobile
												</label>
												<input
													type='number'
													name='mobile'
													id='number'
													placeholder='mobile number'
													className='form-input'
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

											<button
												type='submit'
												className='signin-button'>
												Update Details
											</button>
										</form>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<ForgetPassword />
							</TabPanel>
						</Tabs>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
