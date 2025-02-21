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
  email: yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  name: yup.string().required("Họ và tên là bắt buộc"),
  mobile: yup.string().required("Số điện thoại là bắt buộc"),
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
      <MetaTitle title={`Hồ sơ của bạn: ${loggedUser?.name}`} />
      <div className="profile-container">
        <div className="container">
          <h1 className="profile-title">Hồ Sơ Của Tôi</h1>
          <p className="profile-name">Chào mừng {loggedUser?.name}</p>
          <div className="profile-tabs">
            <Tabs>
              <TabList className="profile-tablist">
                <Tab>Chi tiết</Tab>
                <Tab>Đơn hàng của tôi</Tab>
                <Tab>Cập nhật hồ sơ</Tab>
                <Tab>Đổi mật khẩu</Tab>
              </TabList>

              <TabPanel>
                <div className="profile-details">
                  <div className="profile-items">
                    <span>Họ và tên:</span>
                    <h3>{loggedUser?.name}</h3>
                  </div>
                  <div className="profile-items">
                    <span>Email:</span>
                    <h3>{loggedUser?.email}</h3>
                  </div>
                  <div className="profile-items">
                    <span>Số điện thoại:</span>
                    <h3>{loggedUser?.mobile}</h3>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <Orders />
              </TabPanel>
              <TabPanel>
                <div className="signin-form-container password-form-container">
                  <div className="reset-password-title">
                    <h1>Cập nhật thông tin hồ sơ</h1>
                    <p>
                      Nhập thông tin mới của bạn bên dưới mà bạn muốn cập nhật!
                    </p>
                  </div>
                  <div className="signin-form profile-update-form">
                    <form
                      onSubmit={formik.handleSubmit}
                      className="signin-form-fields"
                      action="#"
                    >
                      <div className="form-field">
                        <label htmlFor="name" className="form-label">
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-input"
                          placeholder="Họ và tên đầy đủ"
                          value={formik.values.name}
                          onChange={formik.handleChange("name")}
                          onBlur={formik.handleBlur("name")}
                        />
                        <div className="error">
                          {formik.touched.name && formik.errors.name}
                        </div>
                      </div>
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
                      <div className="form-field">
                        <label htmlFor="mobile" className="form-label">
                          Số điện thoại
                        </label>
                        <input
                          type="number"
                          name="mobile"
                          id="number"
                          placeholder="Số điện thoại"
                          className="form-input"
                          value={formik.values.mobile}
                          onChange={formik.handleChange("mobile")}
                          onBlur={formik.handleBlur("mobile")}
                        />
                        <div className="error">
                          {formik.touched.mobile && formik.errors.mobile}
                        </div>
                      </div>

                      <button type="submit" className="signin-button">
                        Cập nhật thông tin
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
