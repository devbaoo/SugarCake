// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import MetaTitle from "../components/MetaTitle";
import axios from "axios";
import { base_url } from "../utils/base_url";

const PaymentSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [verificationStatus, setVerificationStatus] = useState(null);

    useEffect(() => {
        const verifyPayment = async () => {
            try {
                // Extract orderCode and other necessary data from the URL or state
                const queryParams = new URLSearchParams(location.search);
                const orderCode = queryParams.get("orderCode");
                const paymentId = queryParams.get("id");
                const signature = queryParams.get("signature");

                if (!orderCode || !paymentId || !signature) {
                    throw new Error("Missing payment verification data");
                }

                // eslint-disable-next-line no-undef
                const response = await axios.post(
                    `${base_url}/payment/order/payment-verification`,
                    {
                        signature,
                        order: {
                            orderCode,
                            status: "PAID", // Assuming status is PAID for success
                            paymentId,
                        },
                        paymentMethod: "ONLINE",
                    }
                );

                if (response.data.success) {
                    setVerificationStatus("success");
                } else {
                    setVerificationStatus("failed");
                }
            } catch (error) {
                console.error("Payment verification failed:", error);
                setVerificationStatus("failed");
            }
        };

        verifyPayment();
    }, [location]);

    useEffect(() => {
        if (verificationStatus === "success") {
            const timeout = setTimeout(() => {
                navigate("/my-orders");
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [verificationStatus, navigate]);

    return (
        <>
            <MetaTitle title={"Thanh toán thành công"} />
            <div className="success-container" style={styles.container}>
                <div style={styles.card}>
                    {verificationStatus === "success" ? (
                        <>
                            <FaCheckCircle style={styles.icon} />
                            <h1 style={styles.title}>Thanh toán thành công!</h1>
                            <p style={styles.message}>
                                Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đã được xác nhận.
                            </p>
                            <p style={styles.submessage}>
                                Bạn sẽ được chuyển hướng đến trang đơn hàng sau 5 giây...
                            </p>
                        </>
                    ) : verificationStatus === "failed" ? (
                        <>
                            <FaTimesCircle style={{ ...styles.icon, color: "#dc3545" }} />
                            <h1 style={styles.title}>Thanh toán thất bại!</h1>
                            <p style={styles.message}>
                                Rất tiếc, giao dịch của bạn không thành công. Vui lòng thử lại.
                            </p>
                        </>
                    ) : (
                        <p style={styles.message}>Đang xác minh thanh toán...</p>
                    )}
                    <div style={styles.buttons}>
                        <Link to="/my-orders" style={styles.button}>
                            Xem đơn hàng
                        </Link>
                        <Link to="/" style={styles.button}>
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
        color: "#4CAF50",
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
        background: "#4CAF50",
        color: "white",
        padding: "12px 24px",
        borderRadius: "5px",
        textDecoration: "none",
        fontSize: "14px",
        transition: "background 0.3s",
    },
};

export default PaymentSuccess;
