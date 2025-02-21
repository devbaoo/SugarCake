import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const FeaturedProduct = ({ product }) => {
  const navigate = useNavigate();
  const { _id, title, tags, price, images } = product;

  const handleRedirect = () => {
    navigate(`/product/${_id}`);
    window.location.reload();
  };

  return (
    <>
      <section className="featured-product">
        <div className="f-product-container">
          <div className="featured-product-container">
            {images.map((image, index) => (
              <Link key={index} onClick={handleRedirect}>
                <img
                  className="featured-product-image"
                  src={`${image.url}`}
                  alt=""
                />
              </Link>
            ))}
            <div className="featured-product-badge-container">
              <p className="featured-product-badge">{tags}</p>
            </div>
          </div>
          <div className="featured-container">
            <div className="featured-price-container">
              <p className="featured-price">
                {Number(price).toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <del className="featured-discount">
                {Number(price + (price * 20) / 100).toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </del>
            </div>
            <Link onClick={handleRedirect} className="featured-title">
              <h3 className="featured-product-name">
                {`${title.substr(0, 24)}....`}
              </h3>
            </Link>
          </div>
          <Link onClick={handleRedirect} className="f-product-link">
            <button className="featured-product-button">
              <div className="default-state">View Details</div>
              <div className="plus-state">
                <FiEye />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default FeaturedProduct;
