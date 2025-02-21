
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import MetaTitle from '../components/MetaTitle';

const PaymentSuccess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Tự động chuyển hướng sau 5 giây
        const timeout = setTimeout(() => {
            navigate('/my-orders');
        }, 5000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <>
            <MetaTitle title={"Thanh toán thành công"} />
            <div className="success-container" style={styles.container}>
                <div style={styles.card}>
                    <FaCheckCircle style={styles.icon} />
                    <h1 style={styles.title}>Thanh toán thành công!</h1>
                    <p style={styles.message}>
                        Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đã được xác nhận.
                    </p>
                    <p style={styles.submessage}>
                        Bạn sẽ được chuyển hướng đến trang đơn hàng sau 5 giây...
                    </p>
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
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    },
    card: {
        background: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '500px',
        width: '100%',
    },
    icon: {
        color: '#4CAF50',
        fontSize: '64px',
        marginBottom: '20px',
    },
    title: {
        color: '#333',
        marginBottom: '20px',
        fontSize: '24px',
    },
    message: {
        color: '#666',
        marginBottom: '10px',
        fontSize: '16px',
    },
    submessage: {
        color: '#888',
        fontSize: '14px',
        marginBottom: '30px',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        flexWrap: 'wrap',
    },
    button: {
        background: '#4CAF50',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '14px',
        transition: 'background 0.3s',
        ':hover': {
            background: '#45a049',
        },
    },
};

export default PaymentSuccess;