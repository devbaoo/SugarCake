import React from "react";
import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { addToWishlist } from "../features/products/productSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { FiEye } from "react-icons/fi";

const RecProductCard = ({ product }) => {
	const { _id, title, price, images, tags, totalRating } = product;

	const dispatch = useDispatch();
	const addItemToWishlist = (productId) => {
		dispatch(addToWishlist(productId));
		toast.success("Đã thêm sản phẩm vào danh sách yêu thích");
	};
	return (
		<>
			<div className='rec-product-card'>
				<div className='product-grid'>
					<div className='product-image'>
						<Link className='image'>
							{images.map((image, index) => (
								<img
									key={index}
									className='rec-product-img'
									src={`${image.url}`}
									alt=''
								/>
							))}
						</Link>
						<span className='product-discount-label'>{tags}</span>
						<ul className='product-links'>
							<li>
								<Link
									className='product-icon'
									data-tip='Add to Wishlist'>
									<FaRegHeart
										size={25}
										onClick={(e) => addItemToWishlist(_id)}
									/>
								</Link>
							</li>
							<li>
								<Link
									to={`/product/${_id}`}
									className='product-icon'
									data-tip='Add to Cart'>
									<FiEye size={25} />
								</Link>
							</li>
						</ul>
					</div>
					<div className='product-content'>
						<h3 className='title'>
							<Link
								to={`/product/${_id}`}
								className='product-name'>{`${title.substr(
									0,
									40
								)}....`}</Link>
						</h3>
						<ReactStars
							count={5}
							value={
								Number(totalRating) ? Number(totalRating) : 0
							}
							edit={false}
							size={18}
							activeColor='#FF504E'
						/>
						<div className='price'>
							<span>{`$${price + (price * 20) / 100}`}</span>{" "}
							{`$${price}`}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RecProductCard;
