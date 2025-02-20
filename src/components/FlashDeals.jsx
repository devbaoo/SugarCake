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
		<>
			<div className='flash-container'>
				<div className='flash-title-timer container'>
					<div className='flash-title'>
						<ImPower />
						<h2>Flash Deals</h2>
					</div>
					<div className='countdown-container'>
						<span>Ends in</span>
						<div className='countdown'>
							<span id='hours'>{timeLeft.hours} hours</span> :{" "}
							<span id='minutes'>{timeLeft.minutes} mins</span> :{" "}
							<span id='seconds'>{timeLeft.seconds} secs</span>
						</div>
					</div>
				</div>
				<div className='container'>
					<div className='flash-products'>
						{totalProducts.slice(0, 4).map((product, index) => (
							<ProductCard key={index} product={product} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default FlashDeals;
