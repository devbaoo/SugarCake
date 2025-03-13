import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";

import Carousel from "../components/Carousel";
import FlashDeals from "../components/FlashDeals";
import MetaTitle from "../components/MetaTitle";
import FeaturedProduct from "../components/FeaturedProduct";

const Home = () => {
  const dispatch = useDispatch();

  // Fetch products khi component mount
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Lấy danh sách sản phẩm từ Redux store
  const totalProduct = useSelector((state) => state?.product?.products);

  // Reverse danh sách sản phẩm để lấy sản phẩm mới nhất
  const totalProducts = useMemo(() => [...totalProduct].reverse(), [totalProduct]);

  console.log("totalProducts: ", totalProducts)

  // Lọc sản phẩm có tag "Special"
  const specialProducts = useMemo(
    () => totalProducts.filter((product) => ["Bánh", "Bánh_ngon"].includes(product.category)),
    [totalProducts]
  );

  const bagProducts = useMemo(
    () => totalProducts.filter((product) => product.category === "Giỏ "),
    [totalProducts]
  )

  return (
    <>
      <MetaTitle
        title={"Sugar Silk Cake: Nền tảng mua sắm bánh đường tốt nhất!"}
      />
      <div className="home-container">
        <Carousel />
        <div className="mt-10 m-auto flex mb-8 w-[60%] h-full">
          <div>
            <img
              src="/images/quality_restoration_20250228135127881.jpg"
              alt="Hình ảnh sản phẩm"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>

        <FlashDeals />
        <div className="mini-banner-section">
          <div className="mini-banners container">
            <img
              src="/images/47c299a8-9fe1-47de-b737-ca30ce1d6205.jpg"
              alt="Banner sản phẩm"
            />
            <img
              src="/images/726eacdd-2cee-4a4a-ae3a-1d00787a88c8.jpg"
              alt="Banner sản phẩm"
            />
            <img
              src="/images/2ea7d145-3988-4817-a7bc-389ca8d0b99c.jpg"
              alt="Banner sản phẩm"
            />
          </div>

        </div>
      </div>

      {/* Sản phẩm dành riêng */}
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialProducts.slice(4, 8).map((product, index) => (
            <FeaturedProduct key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Hộp quà cho dịp đặc biệt</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bagProducts.slice(0, 4).map((product, index) => (
            <FeaturedProduct key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
