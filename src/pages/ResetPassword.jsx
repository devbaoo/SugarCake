import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../features/auth/userSlice";
import { useDispatch } from "react-redux";
import MetaTitle from "../components/MetaTitle";

const passwordSchema = yup.object({
  password: yup.string().required("Mật khẩu không được để trống"),
});
const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const resetToken = location.pathname.split("/")[2];
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      dispatch(
        resetPassword({ token: resetToken, password: values?.password })
      );
      navigate("/");
    },
  });
  return (
    <>
      <MetaTitle title={"Đặt lại mật khẩu của bạn"} />
      <div className="reset-password-container">
        <div className="container">
          <div className="signin-form-container password-form-container">
            <h1>Đặt lại mật khẩu của bạn</h1>
            <div className="signin-form profile-update-form">
              <form
                onSubmit={formik.handleSubmit}
                className="signin-form-fields"
                action="#"
              >
                <div className="form-field">
                  <label htmlFor="password" className="form-label">
                    Mật khẩu mới
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Nhập mật khẩu"
                    className="form-input"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                  />
                  <div className="error">
                    {formik.touched.password && formik.errors.password}
                  </div>
                </div>

                <button type="submit" className="signin-button">
                  Cập nhật mật khẩu
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
