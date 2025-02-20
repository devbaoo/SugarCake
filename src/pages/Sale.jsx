import React, { useEffect } from "react";
import FeaturedProduct from "../components/FeaturedProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";
import MetaTitle from "../components/MetaTitle";

const Sale = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	const totalProduct = useSelector((state) => state?.product?.products);
	const totalProducts = [...totalProduct].reverse();
	const saleProducts = totalProducts.filter(
		(product) => product.tags === "popular"
	);
	return (
		<>
			<MetaTitle title={"Live Sale is Here"} />
			<div className='sale-container'>
				<div className='container shop-section'>
					<div className='sale-banner'>
						<img src='./images/sale-banner.jpg' alt='sale banner' />
					</div>
					<div className='sale-page-products'>
						{saleProducts.map((product, index) => {
							return (
								<FeaturedProduct
									key={index}
									product={product}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Sale;
