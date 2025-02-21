import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../features/auth/userSlice";
import { RxCross2 } from "react-icons/rx";
import MetaTitle from "../components/MetaTitle";
import { FaCheck } from "react-icons/fa";

const TrackOrder = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  const userOrders = useSelector((state) => state.auth?.userOrders?.userOrder);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (userOrders && id) {
      const foundOrder = userOrders.find((order) => order?._id === id);
      setOrder(foundOrder);
    }
  }, [userOrders, id]);

  // delivery date

  const deliveryDate = new Date(order?.createdAt);
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  const formattedDeliveryDate = deliveryDate.toDateString();

  // order Tracking

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const statusToProgress = {
      Ordered: 1,
      Processing: 3,
      Dispatched: 5,
      Delivered: 7,
    };

    if (
      order?.orderStatus &&
      statusToProgress.hasOwnProperty(order.orderStatus)
    ) {
      setProgress(statusToProgress[order.orderStatus]);
    } else {
      setProgress(1);
    }
  }, [order?.orderStatus]);

  return (
    <>
      <MetaTitle title={"Theo dõi đơn hàng của bạn"} />
      <div className="track-container">
        <div className="container">
          <section className="order-summary__container">
            <div className="order-summary__content">
              <h2 className="order-summary__title">
                {order?.orderStatus && order?.orderStatus == "Cancelled"
                  ? "Đơn hàng đã hủy!"
                  : "Đơn hàng thành công!"}
              </h2>
              <p className="order-summary__message">
                Cảm ơn bạn đã mua hàng. Bạn có thể xem tóm tắt đơn hàng bên
                dưới.
              </p>
              {order?.orderStatus && order?.orderStatus == "Cancelled" ? (
                ""
              ) : (
                <div className="tracking-wrapper">
                  <div className="tracking">
                    <div id="progress" className={`progress-${progress}`}>
                      <div className="empty-bar"></div>
                      <div className="color-bar"></div>
                      <ul>
                        <li className="bullet-1">
                          <div className="el">
                            <FaCheck className="tracking-check bx bx-check" />
                          </div>
                          <div className="txt">Đã đặt hàng</div>
                        </li>
                        <li className="bullet-2">
                          <div className="el">
                            <FaCheck className="tracking-check bx bx-check" />
                          </div>
                          <div className="txt">Đang xử lý</div>
                        </li>
                        <li className="bullet-3">
                          <div className="el">
                            <FaCheck className="tracking-check bx bx-check" />
                          </div>
                          <div className="txt">Đã xuất kho</div>
                        </li>
                        <li className="bullet-4">
                          <div className="el">
                            <FaCheck className="tracking-check bx bx-check" />
                          </div>
                          <div className="txt">Đã giao hàng</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div className="order-summary__box">
                <div className="order-summary__details">
                  <p className="order-summary__detail">
                    Mã đơn hàng:{" "}
                    <span className="order-summary__id">{order?._id}</span>
                  </p>
                  <p className="order-summary__detail">
                    Ngày đặt hàng:{" "}
                    <span className="order-summary__payment-date">
                      {new Date(order?.createdAt).toLocaleString()}
                    </span>
                  </p>
                </div>
                <button className="order-summary__button">
                  <Link className="back-to-orders" to={"/my-orders"}>
                    Quay lại đơn hàng
                  </Link>
                </button>
              </div>
              <div className="order-summary__items">
                <div className="order-summary__item">
                  {order?.orderItems?.map((item, index) => {
                    return (
                      <div key={index} className="order-summary-info-box">
                        <div className="order-summary__image-box">
                          <img
                            src={`${item?.product?.images[0].url}`}
                            alt="Hình ảnh đơn hàng"
                            className="order-summary__image"
                          />
                        </div>
                        <div className="order-summary">
                          <h2 className="order-summary__product-name">
                            {item?.product?.title}
                          </h2>
                          <p className="order-summary__manufacturer">
                            Số lượng: {item?.quantity} , &nbsp; Màu sắc:{" "}
                            {item?.color}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  <div className="order-summary__pricing">
                    <p className="order-summary__price-label">Giá</p>
                    <p className="order-summary__price">
                      {`$${order?.totalPrice}`}
                    </p>
                  </div>
                  <div className="order-summary__status">
                    <p className="order-summary__status-label">Trạng thái</p>
                    <p className="order-summary__status-text order-summary__status-ready">
                      {order?.orderStatus}
                    </p>
                  </div>
                  <div className="order-summary__delivery">
                    <p className="order-summary__delivery-label">
                      Thời gian giao hàng dự kiến
                    </p>
                    <p className="order-summary__delivery-date">
                      {formattedDeliveryDate}
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-summary__payments">
                <div className="order-summary__action">
                  {(order?.orderStatus && order?.orderStatus === "ordered") ||
                  order?.orderStatus === "processing" ? (
                    <button className="order-summary__cancel">
                      <RxCross2 size={25} />
                      Hủy đơn hàng
                    </button>
                  ) : (
                    ""
                  )}

                  <p className="order-summary__payment">
                    Thanh toán:{" "}
                    <span className="order-summary__card">
                      {order?.paymentInfo?.razorpayPaymentId}
                    </span>
                  </p>
                </div>
                <p className="order-summary__total">
                  Tổng tiền:{" "}
                  <span className="order-summary__total-price">
                    {`$${order?.totalPrice}`}
                  </span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TrackOrder;
