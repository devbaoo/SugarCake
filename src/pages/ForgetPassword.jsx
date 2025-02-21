import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { forgetPasswordToken } from "../features/auth/userSlice";

const emailSchema = yup.object({
  email: yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
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
      <div className="signin-form-container password-form-container">
        <div className="reset-password-title">
          <h2>Đặt lại mật khẩu của bạn</h2>
          <p>
            Nhập địa chỉ email đã đăng ký của bạn bên dưới, <br /> chúng tôi sẽ
            gửi cho bạn liên kết đặt lại mật khẩu tới email đã đăng ký.
          </p>
        </div>
        <div className="signin-form profile-update-form">
          <form
            onSubmit={formik.handleSubmit}
            className="signin-form-fields"
            action="#"
          >
            <div className="form-field">
              <label htmlFor="email" className="form-label">
                Email của bạn
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-input"
                placeholder="name@drstore.com"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
              />
              <div className="error">
                {formik.touched.email && formik.errors.email}
              </div>
            </div>

            <button type="submit" className="signin-button">
              Gửi liên kết đặt lại
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
