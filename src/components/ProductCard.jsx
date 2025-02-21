import ReactStars from "react-rating-stars-component";
import { FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, title, category, price, images, totalRating } = product;
  const addItemToWishlist = (productId) => {
    dispatch(addToWishlist(productId));
    toast.success("Product Added to Wishlist!");
  };

  return (
    <>
      <div className="card">
        <figure>
          {images.map((image, index) => (
            <img
              onClick={() => navigate(`/product/${_id}`)}
              key={index}
              className="product-card-img"
              src={`${image.url}`}
              alt="product image"
            />
          ))}
        </figure>
        <section className="details">
          <div className="min-details">
            <Link to={`/product/${_id}`} className="product-card-name">
              <h1 className="product-name">{`${title.substr(0, 40)}....`}</h1>
              <span className="card-category">{category}</span>
            </Link>
            <h1 className="price">
              {Number(price).toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </h1>
          </div>
          <div className="rate-wishlist">
            <ReactStars
              count={5}
              value={Number(totalRating)}
              edit={false}
              size={18}
              activeColor="#FF504E"
            />
            <Link
              className="card-wishlist"
              onClick={(e) => addItemToWishlist(_id)}
            >
              <FaRegHeart size={25} />
            </Link>
          </div>
          <a href={`/product/${_id}`} className="atc-btn">
            View Product
          </a>
        </section>
      </div>
    </>
  );
};

export default ProductCard;
