import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye } from "react-icons/fi";

const FeaturedProduct = ({ product }) => {
  const navigate = useNavigate();
  const { _id, title, tags, price, images, url } = product;

  const handleRedirect = () => navigate(`/product/${_id}`);

  return (
    <div className="bg-white w-72 rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105 mx-auto">
      {/* Product Image */}
      <Link onClick={handleRedirect}>

        <div className="relative group">
          <img
            className="w-64 h-64 object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
            src={images[0]?.url}
            alt="Product"
          />
          {/* Badge */}
          {/* {tags && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
              {tags}
            </span>
          )} */}
        </div>
      </Link>

      {/* Product Details */}
      <div className="mt-4">
        <Link onClick={handleRedirect} className="block">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
        </Link>

        <p className="text-xl font-bold text-red-500 mt-1">
          {Number(price).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
        </p>
      </div>

      {/* View Details Button */}
      <button
        onClick={handleRedirect}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg font-medium text-sm transition duration-300 hover:bg-red-600"
      >
        <FiEye />
        Xem chi tiết sản phẩm
      </button>
    </div>
  );
};

export default FeaturedProduct;
