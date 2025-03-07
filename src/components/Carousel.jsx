import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const slidesData = [
	{
		buttonText: "Mua ngay",
		image: "/images/SUGAR_SILK_CAKE.jpg",
	},
	{
		buttonText: "Xem ngay",
		image: "/images/quality_restoration_20250228134956108.jpg",
	},
	{
		buttonText: "Mua ngay",
		image: "/images/quality_restoration_20250228134747251.jpg",
	},
];

const Carousel = () => {
	const navigate = useNavigate();
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const goToPrevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - 1 : slidesData.length - 1
		);
	};

	const goToNextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex < slidesData.length - 1 ? prevIndex + 1 : 0
		);
	};

	const handlebtnClick = () => {
		navigate("/shop");
	};

	return (
		<div className="relative w-full h-[600px] overflow-hidden shadow-lg">
			{slidesData.map((slide, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: index === currentIndex ? 1 : 0, x: 0 }}
					exit={{ opacity: 0, x: -50 }}
					transition={{ duration: 0.5 }}
					className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"
						}`}
				>
					<img
						src={slide.image}
						alt={`Slide ${index + 1}`}
						className="w-full h-full object-cover"
					/>


					<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6 text-center">
						<h3 className="text-5xl font-bold mb-4 drop-shadow-lg">{slide.title}</h3>
						<p className="text-xl mb-6 drop-shadow-md">{slide.subtitle}</p>
						<button
							onClick={handlebtnClick}
							className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg"
						>
							{slide.buttonText} &#10095;
						</button>
					</div>
				</motion.div>
			))}

			{/* Nút điều hướng */}
			<button
				className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 hover:bg-opacity-80 text-white p-4 rounded-full transition-all shadow-lg"
				onClick={goToPrevSlide}
			>
				&#10094;
			</button>
			<button
				className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 hover:bg-opacity-80 text-white p-4 rounded-full transition-all shadow-lg"
				onClick={goToNextSlide}
			>
				&#10095;
			</button>

			{/* Chấm tròn chỉ số */}
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{slidesData.map((_, index) => (
					<div
						key={index}
						className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? "bg-white scale-110" : "bg-gray-400"
							}`}
					></div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
