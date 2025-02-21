import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { base_url } from "../utils/base_url";
import { config } from "../utils/axiosConfig";
import { createOrder, emptyCart } from "../features/auth/userSlice";
import MetaTitle from "../components/MetaTitle";

const checkoutSchema = yup.object({
  name: yup.string().required("Name is Required"),
  address: yup.string().required("Address is Required"),
  city: yup.string().required("City is Required"),
  state: yup.string().required("State is Required"),
  country: yup.string().required("Country is Required"),
  pincode: yup.number().required("Pincode is Required"),
});

const Checkout = () => {
  const [cartSubTotal, setCartSubTotal] = useState(null);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(null);
  const [cartProductState, setCartProductState] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      city: "",
      other: "",
      state: "",
      country: "",
      pincode: "",
    },

    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        checkoutHandler();
      }, 300);
    },
  });
  const cartProducts = useSelector((state) => state?.auth?.getCart);
  let shippingCharge = 50;

  useEffect(() => {
    let cartQuantity = 0;
    let cartSum = 0;
    for (let i = 0; i < cartProducts?.length; i++) {
      cartSum =
        cartSum + Number(cartProducts[i]?.quantity * cartProducts[i]?.price);
      cartQuantity = cartQuantity + cartProducts[i]?.quantity;
    }
    setCartSubTotal(cartSum);
    setCartTotalQuantity(cartQuantity);
  }, [cartProducts]);
  const orderAmount = cartSubTotal + shippingCharge;
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  useEffect(() => {
    let items = [];
    for (let i = 0; i < cartProducts?.length; i++) {
      items.push({
        product: cartProducts[i].productId?._id,
        quantity: cartProducts[i]?.quantity,
        color: cartProducts[i]?.color[0],
        price: cartProducts[i]?.price,
      });
    }
    setCartProductState(items);
  }, [cartProducts]);

  const checkoutHandler = async () => {
    if (!paymentMethod) {
        alert("Vui lòng chọn phương thức thanh toán");
        return;
    }

    const orderData = {
        totalPrice: orderAmount,
        priceAfterDiscount: orderAmount,
        orderItems: cartProductState,
        paymentInfo: {
            payosOrderId: `TEMP_${Date.now()}`,
            payosPaymentId: "PENDING",
        },
        shippingInfo: formik.values,
        paymentMethod: paymentMethod, // Add payment method to order data
    };

    dispatch(createOrder(orderData)).then((result) => {
        if (result.payload?.success) {
            dispatch(emptyCart());
            if (paymentMethod === "bank" && result.payload?.paymentData?.paymentUrl) {
                window.location.href = result.payload.paymentData.paymentUrl;
            } else {
                navigate("/my-orders");
            }
        }
    });
};
  return (
    <>
      <MetaTitle title={"Order Cart Products"} />
      <div className="checkout-container">
        <div className="container">
          <div className="checkout-main">
            <div className="checkout-title">
              <h2>Thông tin giao hàng</h2>
              <Link className="back-to-cart" to={"/cart"}>
                <FaArrowLeft />
                Quay lại giỏ hàng
              </Link>
            </div>
            <div className="checkout-d-flex">
              <form action="#" onSubmit={formik.handleSubmit}>
                <div className="form-section">
                  <div className="checkout-form">
                    <label>
                      <span className="fname">
                        Họ và tên <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Họ và tên"
                        value={formik.values.name}
                        onChange={formik.handleChange("name")}
                        onBlur={formik.handleBlur("name")}
                      />
                      <div className="error">
                        {formik.touched.name && formik.errors.name}
                      </div>
                    </label>

                    <label>
                      <span>
                        Quốc gia <span className="required">*</span>
                      </span>
                      <select
                        name="selection"
                        value={formik.values.country}
                        onChange={formik.handleChange("country")}
                        onBlur={formik.handleBlur("country")}
                      >
                        <option value="select">Chọn một quốc gia...</option>
                        <option value="USA">USA</option>
                        <option value="VN">Việt Nam</option>
                        <option value="Lao">Lào</option>
                      </select>
                      <div className="error">
                        {formik.touched.country && formik.errors.country}
                      </div>
                    </label>
                    <label>
                      <span>
                        Địa chỉ <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        name="address"
                        placeholder="Số nhà và tên đường"
                        value={formik.values.address}
                        onChange={formik.handleChange("address")}
                        onBlur={formik.handleBlur("address")}
                      />
                      <div className="error">
                        {formik.touched.address && formik.errors.address}
                      </div>
                    </label>
                    <label>
                      <span>Khác</span>
                      <input
                        type="text"
                        name="other"
                        placeholder="Căn hộ, suite, đơn vị,... (tuỳ chọn)"
                        value={formik.values.other}
                        onChange={formik.handleChange("other")}
                        onBlur={formik.handleBlur("other")}
                      />
                    </label>
                    <label>
                      <span>
                        Thành phố <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        name="city"
                        placeholder="Thành phố"
                        value={formik.values.city}
                        onChange={formik.handleChange("city")}
                        onBlur={formik.handleBlur("city")}
                      />
                      <div className="error">
                        {formik.touched.city && formik.errors.city}
                      </div>
                    </label>

                    <label>
                      <span>
                        Tỉnh / Quận <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        name="state"
                        placeholder="Tỉnh / Quận"
                        value={formik.values.state}
                        onChange={formik.handleChange("state")}
                        onBlur={formik.handleBlur("state")}
                      />
                      <div className="error">
                        {formik.touched.state && formik.errors.state}
                      </div>
                    </label>
                    <label>
                      <span>
                        Mã bưu điện <span className="required">*</span>
                      </span>
                      <input
                        type="number"
                        name="pincode"
                        placeholder="Mã bưu điện"
                        value={formik.values.pincode}
                        onChange={formik.handleChange("pincode")}
                        onBlur={formik.handleBlur("pincode")}
                      />
                      <div className="error">
                        {formik.touched.pincode && formik.errors.pincode}
                      </div>
                    </label>
                  </div>
                  <div className="Yorder">
                    <table>
                      <thead>
                        <tr>
                          <th colSpan="2">Đơn hàng của bạn</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="checkout-product-heading">
                            Sản phẩm :
                          </td>
                          {cartProducts &&
                            cartProducts.map((item, index) => {
                              return (
                                <td
                                  className="checkout-products-title"
                                  key={index}
                                >
                                  <p>
                                    {`${item?.productId?.title.substr(
                                      0,
                                      18
                                    )}...`}
                                  </p>
                                </td>
                              );
                            })}
                        </tr>
                        <tr>
                          <td>Tổng số sản phẩm</td>
                          <td>{cartTotalQuantity}</td>
                        </tr>
                        <tr>
                          <td>Tạm tính</td>
                          <td>
                            {Number(cartSubTotal).toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </td>
                        </tr>
                        <tr>
                          <td>Phí vận chuyển</td>
                          <td>
                            {Number(shippingCharge).toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </td>
                        </tr>
                        <tr className="total-ammount">
                          <td>Số tiền đơn hàng</td>
                          <td>
                            {Number(orderAmount).toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <br />
                    <div>
        <input
            type="radio"
            name="paymentMethod"
            value="cod"
            onChange={() => setPaymentMethod("cod")}
            checked={paymentMethod === "cod"}
        />{" "}
        Thanh toán khi giao hàng
    </div>
    <div>
        <input
            type="radio"
            name="paymentMethod"
            value="bank"
            onChange={() => setPaymentMethod("bank")}
            checked={paymentMethod === "bank"}
        />{" "}
        Thanh toán qua ngân hàng
    </div>
    <p>
        {paymentMethod === "cod" 
            ? "Thanh toán khi nhận hàng cũng có sẵn."
            : "Chuyển hướng đến cổng thanh toán an toàn."}
    </p>
                  </div>
                </div>
                <div className="checkout-button">
                  <button type="submit">Đặt hàng</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
