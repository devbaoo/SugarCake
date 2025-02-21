// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa';
import MetaTitle from '../components/MetaTitle';

const PaymentCancel = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/cart');
        }, 5000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <>
            <MetaTitle title={"Thanh toán thất bại"} />
            <div style={styles.container}>
                <div style={styles.card}>
                    <FaTimesCircle style={styles.icon} />
                    <h1 style={styles.title}>Thanh toán không thành công!</h1>
                    <p style={styles.message}>
                        Rất tiếc, giao dịch của bạn đã bị hủy hoặc có lỗi xảy ra.
                    </p>
                    <p style={styles.submessage}>
                        Bạn sẽ được chuyển hướng về giỏ hàng sau 5 giây...
                    </p>
                    <div style={styles.buttons}>
                        <Link to="/cart" style={styles.button}>
                            Quay lại giỏ hàng
                        </Link>
                        <Link to="/" style={{...styles.button, background: '#666'}}>
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
        color: '#dc3545',
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
        background: '#dc3545',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '14px',
        transition: 'background 0.3s',
    },
};

export default PaymentCancel;