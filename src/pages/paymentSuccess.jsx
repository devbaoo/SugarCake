// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import MetaTitle from "../components/MetaTitle";
import axios from "axios";
import { base_url } from "../utils/base_url";

const PaymentSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [verificationStatus, setVerificationStatus] = useState("pending");

    useEffect(() => {
        const verifyPayment = async () => {
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

                console.log("Đang xác minh giao dịch thành công:", { orderCode, paymentId, signature });

                const token = localStorage.getItem("token");
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
                            status: "PAID",
                            paymentId,
                        },
                        paymentMethod: "ONLINE",
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                console.log("Phản hồi từ API:", response.data);

                if (response.data.success) {
                    setVerificationStatus("success");
                } else {
                    console.error("Xác minh thất bại:", response.data);
                    setVerificationStatus("failed");
                }
            } catch (error) {
                console.error("Lỗi khi xác minh thanh toán:", error);
                setVerificationStatus("failed");
            }
        };
        verifyPayment();
    }, [location]);

    useEffect(() => {
        if (verificationStatus === "success") {
            console.log("Thanh toán thành công, chuyển hướng về /orders sau 5 giây...");
            const timeout = setTimeout(() => {
                navigate("/cart", { replace: true });
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [verificationStatus, navigate]);

    return (
        <>
            <MetaTitle title={"Thanh toán thành công"} />
            <div style={styles.container}>
                <div style={styles.card}>
                    {verificationStatus === "success" ? (
                        <>
                            <FaCheckCircle style={styles.icon} />
                            <h1 style={styles.title}>Thanh toán thành công!</h1>
                            <p style={styles.message}>Cảm ơn bạn đã mua hàng.</p>
                            <p style={styles.submessage}>Bạn sẽ được chuyển hướng về đơn hàng sau 5 giây...</p>
                        </>
                    ) : verificationStatus === "failed" ? (
                        <>
                            <FaCheckCircle style={styles.icon} />
                            <h1 style={styles.title}>Xác minh thất bại!</h1>
                            <p style={styles.message}>Có lỗi xảy ra khi xác minh giao dịch. Vui lòng thử lại.</p>
                        </>
                    ) : (
                        <p style={styles.message}>Đang xác minh giao dịch...</p>
                    )}
                    <div style={styles.buttons}>
                        <Link to="/orders" style={styles.button}>
                            Xem đơn hàng
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
        color: "#28a745",
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
        background: "#28a745",
        color: "white",
        padding: "12px 24px",
        borderRadius: "5px",
        textDecoration: "none",
        fontSize: "14px",
        transition: "background 0.3s",
    },
};

export default PaymentSuccess;