import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import MetaTitle from "../components/MetaTitle";
import axios from "axios";
import { base_url } from "../utils/base_url";

const PaymentCancel = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [verificationStatus, setVerificationStatus] = useState("pending");

    useEffect(() => {
        const verifyCancellation = async () => {
            try {
                const queryParams = new URLSearchParams(location.search);
                const orderCode = queryParams.get("orderCode");
                const paymentId = queryParams.get("id");
                const signature = queryParams.get("signature");

                if (!orderCode || !paymentId || !signature) {
                    console.error("Thiếu thông tin xác minh thanh toán.");
                    setVerificationStatus("failed");
                    return;
                }

                console.log("Đang xác minh giao dịch hủy:", { orderCode, paymentId, signature });

                const token = localStorage.getItem("token"); // 🛠️ Lấy token từ localStorage
                if (!token) {
                    console.error("Không tìm thấy token.");
                    setVerificationStatus("failed");
                    return;
                }

                const response = await axios.post(
                    `${base_url}payment/order/payment-verification`,
                    {
                        signature,
                        order: {
                            orderCode,
                            status: "CANCELLED",
                            paymentId,
                        },
                        paymentMethod: "ONLINE",
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`, // 🔥 Thêm token vào headers
                            "Content-Type": "application/json",
                        },
                    }
                );

                console.log("Phản hồi từ API:", response.data);

                if (response.data.success) {
                    setVerificationStatus("cancelled");
                } else {
                    console.error("Xác minh hủy thất bại:", response.data);
                    setVerificationStatus("failed");
                }
            } catch (error) {
                console.error("Lỗi khi xác minh thanh toán:", error);
                setVerificationStatus("failed");
            }
        };
        verifyCancellation();
    }, [location]);

    useEffect(() => {
        if (verificationStatus === "cancelled") {
            console.log("Hủy thành công, chuyển hướng về /cart sau 5 giây...");
            const timeout = setTimeout(() => {
                navigate("/cart", { replace: true });
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [verificationStatus, navigate]);

    return (
        <>
            <MetaTitle title={"Thanh toán thất bại"} />
            <div style={styles.container}>
                <div style={styles.card}>
                    {verificationStatus === "cancelled" ? (
                        <>
                            <FaTimesCircle style={styles.icon} />
                            <h1 style={styles.title}>Thanh toán không thành công!</h1>
                            <p style={styles.message}>Giao dịch của bạn đã bị hủy.</p>
                            <p style={styles.submessage}>Bạn sẽ được chuyển hướng về giỏ hàng sau 5 giây...</p>
                        </>
                    ) : verificationStatus === "failed" ? (
                        <>
                            <FaTimesCircle style={styles.icon} />
                            <h1 style={styles.title}>Xác minh thất bại!</h1>
                            <p style={styles.message}>Có lỗi xảy ra khi xác minh giao dịch. Vui lòng thử lại.</p>
                        </>
                    ) : (
                        <p style={styles.message}>Đang xác minh hủy giao dịch...</p>
                    )}
                    <div style={styles.buttons}>
                        <Link to="/cart" style={styles.button}>
                            Quay lại giỏ hàng
                        </Link>
                        <Link to="/" style={{ ...styles.button, background: "#666" }}>
                            Tiếp tục mua sắm
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

const styles = {
    container: {
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
    },
    card: {
        background: "white",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        textAlign: "center",
        maxWidth: "500px",
        width: "100%",
    },
    icon: {
        color: "#dc3545",
        fontSize: "64px",
        marginBottom: "20px",
    },
    title: {
        color: "#333",
        marginBottom: "20px",
        fontSize: "24px",
    },
    message: {
        color: "#666",
        marginBottom: "10px",
        fontSize: "16px",
    },
    submessage: {
        color: "#888",
        fontSize: "14px",
        marginBottom: "30px",
    },
    buttons: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        flexWrap: "wrap",
    },
    button: {
        background: "#dc3545",
        color: "white",
        padding: "12px 24px",
        borderRadius: "5px",
        textDecoration: "none",
        fontSize: "14px",
        transition: "background 0.3s",
    },
};

export default PaymentCancel;
