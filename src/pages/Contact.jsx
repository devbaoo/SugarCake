import React, { useEffect } from "react";
import { GrLocation } from "react-icons/gr";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineWatchLater } from "react-icons/md";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { createEnquiry } from "../features/enquiry/enquirySlice";
import MetaTitle from "../components/MetaTitle";

const enquirySchema = yup.object({
	name: yup.string().required("Name is Required"),
	mobile: yup.string().required("Mobile No. is Required"),
	email: yup
		.string()
		.email("Email should be valid")
		.required("Email is Required"),
	comment: yup.string().required("Description is Required"),
});

const Contact = () => {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			name: "",
			mobile: "",
			email: "",
			comment: "",
		},

		validationSchema: enquirySchema,
		onSubmit: (values) => {
			dispatch(createEnquiry(values));
			formik.resetForm();
		},
	});
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<MetaTitle title={"Contact: Our Support Team"} />
			<div className='contact-container'>
				<div className='container'>
					<div className='contact-content'>
						<div className='contact-header'>
							<p className='contact-label'>Contact</p>
							<h2 className='contact-heading'>Get in Touch</h2>
							<p className='contact-description'>
								Do not hasitate to contact us on
							</p>
						</div>
						<div className='contact-info'>
							<div className='contact-item'>
								<div className='icon-wrapper'>
									<GrLocation />
								</div>
								<div className='info'>
									<h3 className='info-heading'>
										Our Address
									</h3>
									<p className='info-text'>
										Khu Cong Nghe Cao, Thu Duc,
									</p>
									<p className='info-text'>
										Thanh pho Ho Chi Minh
									</p>
								</div>
							</div>
							<div className='contact-item'>
								<div className='icon-wrapper'>
									<TbPhoneCall />
								</div>
								<div className='info'>
									<h3 className='info-heading'>Contact</h3>
									<p className='info-text'>
										Mobile: +0945337450
									</p>
									<p className='info-text'>
										Mail: sugarsilkcake@gmail.com
									</p>
								</div>
							</div>
							<div className='contact-item'>
								<div className='icon-wrapper'>
									<MdOutlineWatchLater color='#fff' />
								</div>
								<div className='info'>
									<h3 className='info-heading'>
										Working hours
									</h3>
									<p className='info-text'>
										We are Available: 24*7
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='contact-form'>
						<h2 className='form-heading'>Ready to Get Started?</h2>
						<form onSubmit={formik.handleSubmit} id='contactForm'>
							<div className='form-group'>
								<input
									type='text'
									id='name'
									placeholder='Your name'
									className='form-input'
									name='name'
									value={formik.values.name}
									onChange={formik.handleChange("name")}
									onBlur={formik.handleBlur("name")}
								/>
								<div className='error'>
									{formik.touched.name && formik.errors.name}
								</div>
							</div>
							<div className='form-group'>
								<input
									type='number'
									id='mobile'
									placeholder='Your mobile number'
									className='form-input'
									name='mobile'
									value={formik.values.mobile}
									onChange={formik.handleChange("mobile")}
									onBlur={formik.handleBlur("mobile")}
								/>
								<div className='error'>
									{formik.touched.mobile &&
										formik.errors.mobile}
								</div>
							</div>
							<div className='form-group'>
								<input
									type='email'
									id='email'
									placeholder='Your email address'
									className='form-input'
									name='email'
									value={formik.values.email}
									onChange={formik.handleChange("email")}
									onBlur={formik.handleBlur("email")}
								/>
								<div className='error'>
									{formik.touched.email &&
										formik.errors.email}
								</div>
							</div>
							<div className='form-group'>
								<textarea
									id='textarea'
									name='comment'
									cols='30'
									rows='5'
									placeholder='Write your message...'
									className='form-textarea'
									value={formik.values.comment}
									onChange={formik.handleChange("comment")}
									onBlur={formik.handleBlur("comment")}
								/>
								<div className='error'>
									{formik.touched.comment &&
										formik.errors.comment}
								</div>
							</div>
							<div className='text-center'>
								<button type='submit' className='submit-btn'>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
