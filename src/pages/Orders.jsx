import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../features/auth/userSlice";
import { IoEyeSharp } from "react-icons/io5";

const Orders = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserOrders());
	}, []);
	const userAllOrders = useSelector(
		(state) => state.auth?.userOrders?.userOrder
	);
	let userOrders;
	if (userAllOrders) {
		userOrders = [...userAllOrders]?.reverse();
	}

	return (
		<>
			<div className='order-container'>
				<div className='container'>
					<h1 className='title'>My Orders</h1>
					{userOrders && userOrders?.length !== 0 ? (
						<div className='order-table'>
							<div className='table-wrapper'>
								<table className='table table-striped table-hover'>
									<thead className='order-table-header'>
										<tr>
											<th>ID.</th>
											<th>Prodct</th>
											<th>Color</th>
											<th>Order Date</th>
											<th>Status</th>
											<th>Amount</th>
											<th>View</th>
										</tr>
									</thead>
									<tbody>
										{userOrders &&
											userOrders?.map((item, index) => {
												return (
													<tr
														className='order-table-row'
														key={index}>
														<td>{item?._id}</td>
														{item?.orderItems?.map(
															(i, index) => {
																return (
																	<td
																		key={
																			index
																		}>
																		<a
																			href={`/product/${i?.product?._id}`}>
																			<img
																				// src={`${i?.product?.images[0].url}`}
																				src={`${i?.product?.images[0].url}`}
																				className='order-product-image'
																				alt='Avatar'
																			/>{" "}
																			<p>
																				{
																					i
																						?.product
																						?.title
																				}
																			</p>
																		</a>
																	</td>
																);
															}
														)}
														{item?.orderItems?.map(
															(i, index) => {
																return (
																	<td
																		key={
																			index
																		}>
																		{
																			i
																				?.color[0]
																		}
																	</td>
																);
															}
														)}
														<td>
															{new Date(
																item?.createdAt
															).toDateString()}
														</td>
														<td>
															{item?.orderStatus}
														</td>
														<td>{`$${item?.totalPrice}`}</td>
														<td className='view-order-btn'>
															<Link
																to={`/track-order/${item?._id}`}>
																<IoEyeSharp
																	size={22}
																/>
															</Link>
														</td>
													</tr>
												);
											})}
									</tbody>
								</table>
							</div>
						</div>
					) : (
						<p>
							You do not have any order yet ! {"  "}
							<Link to={"/shop"}>Start Shopping</Link>
						</p>
					)}
				</div>
			</div>
		</>
	);
};

export default Orders;
