import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slidesData = [
	{
		title: "Friday Sale",
		subtitle: "Buy anything and get 30% OFF",
		buttonText: "Buy Now",
		image: "dist/images/anh1.jpg",
	},
	{
		title: "Holyday Special",
		subtitle: "Click Below to get Holyday Special Deal",
		buttonText: "Buy Now",
		image: "dist/images/banner.jpg",
	},
	{
		title: "Weekend Sale",
		subtitle: "Get 20% Extra Discount on every Weekend",
		buttonText: "Shop Now",
		image: "dist/images/banh.jpg",
	},
];

const Carousel = () => {
	const navigate = useNavigate();
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
		}, 3000);
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
		<>
			<div className='carousel'>
				{slidesData.map((slide, index) => (
					<div
						key={index}
						className={
							index === currentIndex ? "slide active" : "slide"
						}>
						<img src={slide.image} alt={`Slide ${index + 1}`} />
						<div className='content container'>
							<button className='prev' onClick={goToPrevSlide}>
								&#10094;
							</button>
							<button className='next' onClick={goToNextSlide}>
								&#10095;
							</button>
							<h3>{slide.title}</h3>
							<p>{slide.subtitle}</p>
							<button
								onClick={handlebtnClick}
								className='carousel-btn'>
								{slide.buttonText} &#10095;
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Carousel;
