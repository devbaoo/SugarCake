import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  removeCartItem,
  updateCartQty,
} from "../features/auth/userSlice";
import { RxCross2 } from "react-icons/rx";
import MetaTitle from "../components/MetaTitle";

export default function Component() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartProductDetails, setCartProductDetails] = useState({});

  useEffect(() => {
    dispatch(getCart());
    window.scrollTo(0, 0);
  }, [dispatch]);

  useEffect(() => {
    Object.entries(cartProductDetails).forEach(([pId, newQuantity]) => {
      dispatch(updateCartQty({ pId, quantity: newQuantity }));
    });
    setTimeout(() => {
      dispatch(getCart());
    }, 200);
  }, [cartProductDetails, dispatch]);

  const cartProducts = useSelector((state) => state?.auth?.getCart);

  const deleteCartItem = (id) => {
    dispatch(removeCartItem(id));
    setTimeout(() => {
      dispatch(getCart());
    }, 200);
  };

  useEffect(() => {
    let cartSum =
      cartProducts?.reduce(
        (sum, item) => sum + Number(item.quantity * item.price),
        0
      ) || 0;
    setCartSubTotal(cartSum);
  }, [cartProducts]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 0) {
      setCartProductDetails((prev) => ({ ...prev, [id]: newQuantity }));
    }
  };

  return (
    <>
      <MetaTitle title={"Sản phẩm giỏ hàng của bạn"} />
      <div className="cart-container">
        <div className="cart container">
          <div className="shopping-cart">
            <h1 className="page-title">Giỏ hàng</h1>
            {cartProducts?.length === 0 && (
              <p className="empty-cart">
                Giỏ hàng của bạn đang trống!{" "}
                <Link to={"/shop"}>Bắt đầu mua sắm</Link>
              </p>
            )}
            <div className="cartpage-items">
              {cartProducts?.map((item) => (
                <div key={item._id} className="cart-product-details">
                  <table className="product-table">
                    <thead>
                      <tr>
                        <th className="product-column">Sản phẩm</th>
                        <th className="product-column">Giá</th>
                        <th className="product-column">Số lượng</th>
                        <th className="product-column">Tổng cộng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart-table-row">
                        <td className="cart-product-info">
                          <div className="product-info-wrapper">
                            <img
                              className="cart-product-image"
                              src={`${item?.productId?.images[0].url}`}
                              alt="Hình ảnh sản phẩm"
                            />
                            <div className="cart-product-title">
                              <h4 className="cart-product-name">
                                {`${item?.productId?.title.substr(0, 45)}...`}
                              </h4>
                              <div className="cart-color">
                                Màu sắc:{" "}
                                <p style={{ background: `${item?.color}` }}></p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="cart-product-price">
                          {Number(item?.price).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                        <td className="cart-product-quantity">
                          <div className="quantity-wrapper">
                            <button
                              className="cart-quantity-btn"
                              onClick={() =>
                                updateQuantity(
                                  item._id,
                                  (cartProductDetails[item._id] ||
                                    item.quantity) - 1
                                )
                              }
                            >
                              -
                            </button>
                            <input
                              type="number"
                              className="cart-quantity"
                              value={
                                cartProductDetails[item._id] || item.quantity
                              }
                              onChange={(e) =>
                                updateQuantity(
                                  item._id,
                                  parseInt(e.target.value)
                                )
                              }
                            />
                            <button
                              className="cart-quantity-btn"
                              onClick={() =>
                                updateQuantity(
                                  item._id,
                                  (cartProductDetails[item._id] ||
                                    item.quantity) + 1
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="product-total">
                          {Number(
                            item?.price *
                              (cartProductDetails[item._id] || item.quantity)
                          ).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                        <td className="remove-cart-btn">
                          <RxCross2
                            size={30}
                            onClick={() => deleteCartItem(item?._id)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
            {cartProducts?.length !== 0 && (
              <div className="summary-container">
                <div className="promo-container">
                  <Link to={"/shop"} className="continue-btn-link">
                    <button className="continue-btn">
                      <FaArrowLeftLong /> Tiếp tục mua sắm
                    </button>
                  </Link>
                </div>
                <div className="summary-content">
                  <div className="summary-item">
                    <p className="total-label">Tổng giỏ hàng</p>
                    <div className="total-content">
                      <p className="total-value">
                        {Number(cartSubTotal).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </p>
                      <p className="total-info">
                        (đã bao gồm tất cả các loại thuế)
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/checkout")}
                    className="checkout-btn"
                  >
                    Thanh toán
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
