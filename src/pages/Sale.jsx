import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";
import MetaTitle from "../components/MetaTitle";
import FeaturedProduct from "../components/FeaturedProduct";
import { motion } from "framer-motion";

const saleBanners = [
  { image: "./images/ef43bc39c82a7974203b.jpg" },
  { image: "./images/Screenshot 2025-03-07 174532.png" },
  { image: "./images/Screenshot 2025-03-07 174518.png" },
];

const Sale = () => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const totalProduct = useSelector((state) => state?.product?.products);
  const saleProducts = [...totalProduct]
    .reverse()
    .filter((product) => product.tags === "popular");

  // Tự động chuyển banner sau 4 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % saleBanners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <MetaTitle title={"Live Sale is Here"} />
      <div className="sale-container">
  <div className="container shop-section">
    {/* Carousel tự động chạy */}
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-lg shadow-lg">
      {saleBanners.map((banner, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: index === currentIndex ? 1 : 0, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={banner.image}
            alt="Banner"
            className="w-full h-full object-contain"  // Chỉnh thành object-contain
          />
        </motion.div>
      ))}
    </div>

    {/* Danh sách sản phẩm giảm giá */}
    <div className="sale-page-products mt-8">
      {saleProducts.map((product, index) => (
        <FeaturedProduct key={index} product={product} />
      ))}
    </div>
  </div>
</div>


    </>
  );
};

export default Sale;
