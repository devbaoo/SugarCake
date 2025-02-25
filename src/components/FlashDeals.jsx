import React, { useEffect, useState } from "react";
import { ImPower } from "react-icons/im";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";

const FlashDeals = () => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	function calculateTimeLeft() {
		const now = new Date();
		const target = new Date(now);
		target.setHours(24, 0, 0, 0);
		const difference = target.getTime() - now.getTime();

		let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
		let minutes = Math.floor((difference / 1000 / 60) % 60);
		let seconds = Math.floor((difference / 1000) % 60);

		return {
			hours: hours < 10 ? `0${hours}` : hours,
			minutes: minutes < 10 ? `0${minutes}` : minutes,
			seconds: seconds < 10 ? `0${seconds}` : seconds,
		};
	}

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	const totalProduct = useSelector((state) => state.product?.products);
	const totalProducts = [...totalProduct].reverse();

	return (
		<div className="bg-gray-100 py-12">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				{/* Header Section */}
				<div className="flex items-center justify-between mb-8">
					<div className="flex items-center gap-3">
						<ImPower className="text-red-500 text-3xl animate-pulse" />
						<h2 className="text-3xl font-bold text-gray-800">Flash Deals</h2>
					</div>
					{/* Countdown Timer */}
					<div className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md">
						TOP sản phẩm bán hết nhanh nhất
					</div>
				</div>

				{/* Product Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{totalProducts.slice(0, 4).map((product, index) => (
						<ProductCard key={index} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default FlashDeals;
