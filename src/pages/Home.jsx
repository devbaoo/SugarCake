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

  // Lọc sản phẩm có tag "Special"
  const specialProducts = useMemo(
    () => totalProducts.filter((product) => product.tags === "Special"),
    [totalProducts]
  );

  return (
    <>
      <MetaTitle title="Sugar Silk Cake: Nền tảng mua sắm bánh đường tốt nhất!" />

      {/* Slider Carousel */}
      <Carousel />

      {/* Banner chính */}
      <div className="flex justify-center mb-8 mt-8">
        <img src="/images/sugar.png" alt="Hình ảnh sản phẩm" className="w-full max-w-[800px]" />
      </div>

      {/* Flash Deals */}
      <FlashDeals />

      {/* Mini Banners */}
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="/images/quality_restoration_20250210111142533.jpg" alt="Banner sản phẩm" className="rounded-lg shadow-lg" />
          <img src="/images/quality_restoration_20250210111234772.jpg" alt="Banner sản phẩm" className="rounded-lg shadow-lg" />
          <img src="/images/quality_restoration_20250210111322142.jpg" alt="Banner sản phẩm" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Sản phẩm dành riêng */}
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Dành riêng cho bạn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialProducts.slice(0, 4).map((product, index) => (
            <FeaturedProduct key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
