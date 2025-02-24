import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import MetaTitle from "../components/MetaTitle";
import axios from "axios";
import { base_url } from "../utils/base_url";

const PaymentCancel = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [verificationStatus, setVerificationStatus] = useState("loading"); // ✅ Trạng thái loading ban đầu

    useEffect(() => {
        const verifyCancellation = async () => {
            try {
                const queryParams = new URLSearchParams(location.search);
                const orderCode = queryParams.get("orderCode");
                const paymentId = queryParams.get("id");
                const signature = queryParams.get("signature");

                if (!orderCode || !paymentId || !signature) {
                    setVerificationStatus("missing-data");
                    return;
                }

                const response = await axios.post(
                    `${base_url}/payment/order/payment-verification`,
                    {
                        signature,
                        order: {
                            orderCode,
                            status: "CANCELLED",
                            paymentId,
                        },
                        paymentMethod: "ONLINE",
                    }
                );

                if (response.data.success) {
                    setVerificationStatus("cancelled");
                    setTimeout(() => navigate("/cart"), 5000); // ✅ Tự động chuyển hướng
                } else {
                    setVerificationStatus("failed");
                }
            } catch (error) {
                console.error("Payment cancellation verification failed:", error);
                setVerificationStatus("failed");
            }
        };

        verifyCancellation();
    }, [location, navigate]);

    return (
        <>
            <MetaTitle title="Thanh toán thất bại" />
            <div className="min-h-screen flex justify-center items-center p-6">
                <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md w-full">
                    <FaTimesCircle className="text-red-500 text-6xl mb-4" />
                    {verificationStatus === "cancelled" && (
                        <>
                            <h1 className="text-2xl font-bold text-gray-800">Thanh toán không thành công!</h1>
                            <p className="text-gray-600 mt-2">Rất tiếc, giao dịch của bạn đã bị hủy.</p>
                            <p className="text-gray-500 mt-1">Bạn sẽ được chuyển hướng về giỏ hàng sau 5 giây...</p>
                        </>
                    )}
                    {verificationStatus === "failed" && (
                        <>
                            <h1 className="text-2xl font-bold text-gray-800">Xác minh thất bại!</h1>
                            <p className="text-gray-600 mt-2">Có lỗi xảy ra khi xác minh giao dịch. Vui lòng thử lại.</p>
                        </>
                    )}
                    {verificationStatus === "missing-data" && (
                        <>
                            <h1 className="text-2xl font-bold text-gray-800">Thiếu thông tin!</h1>
                            <p className="text-gray-600 mt-2">Không tìm thấy thông tin giao dịch hợp lệ.</p>
                        </>
                    )}
                    {verificationStatus === "loading" && (
                        <p className="text-gray-600">Đang xác minh hủy giao dịch...</p>
                    )}
                    <div className="mt-6 flex justify-center space-x-4">
                        <Link to="/cart" className="bg-red-500 text-white py-2 px-4 rounded-lg transition hover:bg-red-600">
                            Quay lại giỏ hàng
                        </Link>
                        <Link to="/" className="bg-gray-600 text-white py-2 px-4 rounded-lg transition hover:bg-gray-700">
                            Tiếp tục mua sắm
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentCancel;
