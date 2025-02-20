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
		let cartSum = cartProducts?.reduce((sum, item) => sum + Number(item.quantity * item.price), 0) || 0;
		setCartSubTotal(cartSum);
	}, [cartProducts]);

	const updateQuantity = (id, newQuantity) => {
		if (newQuantity >= 0) {
			setCartProductDetails(prev => ({ ...prev, [id]: newQuantity }));
		}
	};

	return (
		<>
			<MetaTitle title={"Your Cart Products"} />
			<div className='cart-container'>
				<div className='cart container'>
					<div className='shopping-cart'>
						<h1 className='page-title'>Shopping Cart</h1>
						{cartProducts?.length === 0 && (
							<p className='empty-cart'>
								Your cart is empty!{" "}
								<Link to={"/shop"}>Start Shopping</Link>
							</p>
						)}
						<div className='cartpage-items'>
							{cartProducts?.map((item) => (
								<div key={item._id} className='cart-product-details'>
									<table className='product-table'>
										<thead>
											<tr>
												<th className='product-column'>Product</th>
												<th className='product-column'>Price</th>
												<th className='product-column'>Quantity</th>
												<th className='product-column'>Total</th>
											</tr>
										</thead>
										<tbody>
											<tr className='cart-table-row'>
												<td className='cart-product-info'>
													<div className='product-info-wrapper'>
														<img
															className='cart-product-image'
															src={`${item?.productId?.images[0].url}`}
															alt='Product image'
														/>
														<div className='cart-product-title'>
															<h4 className='cart-product-name'>
																{`${item?.productId?.title.substr(0, 45)}...`}
															</h4>
															<div className='cart-color'>
																Color: <p style={{ background: `${item?.color}` }}></p>
															</div>
														</div>
													</div>
												</td>
												<td className='cart-product-price'>{`$${item?.price}`}</td>
												<td className='cart-product-quantity'>
													<div className='quantity-wrapper'>
														<button
															className='cart-quantity-btn'
															onClick={() => updateQuantity(item._id, (cartProductDetails[item._id] || item.quantity) - 1)}
														>
															-
														</button>
														<input
															type='number'
															className='cart-quantity'
															value={cartProductDetails[item._id] || item.quantity}
															onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
														/>
														<button
															className='cart-quantity-btn'
															onClick={() => updateQuantity(item._id, (cartProductDetails[item._id] || item.quantity) + 1)}
														>
															+
														</button>
													</div>
												</td>
												<td className='product-total'>
													{`$${item?.price * (cartProductDetails[item._id] || item.quantity)}`}
												</td>
												<td className='remove-cart-btn'>
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
							<div className='summary-container'>
								<div className='promo-container'>
									<Link to={"/shop"} className='continue-btn-link'>
										<button className='continue-btn'>
											<FaArrowLeftLong /> Continue Shopping
										</button>
									</Link>
								</div>
								<div className='summary-content'>
									<div className='summary-item'>
										<p className='total-label'>Cart Total</p>
										<div className='total-content'>
											<p className='total-value'>{`$ ${cartSubTotal}`}</p>
											<p className='total-info'>including All Taxes</p>
										</div>
									</div>
									<button onClick={() => navigate("/checkout")} className='checkout-btn'>
										Checkout
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