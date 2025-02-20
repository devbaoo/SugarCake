import React, { useEffect } from "react";
import RecProductCard from "./RecProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";

const RecProductSection = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);
	const totalProduct = useSelector((state) => state.product.products);
	const totalProducts = [...totalProduct].reverse();
	return (
		<>
			{totalProducts.slice(0, 9).map((product, index) => (
				<RecProductCard key={index} product={product} />
			))}
		</>
	);
};

export default RecProductSection;
