import { useEffect } from "react";
import Carousel from "../components/Carousel";
import FlashDeals from "../components/FlashDeals";
import MetaTitle from "../components/MetaTitle";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";
import FeaturedProduct from "../components/FeaturedProduct";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const totalProduct = useSelector((state) => state?.product?.products);
  const totalProducts = [...totalProduct].reverse();
  const specialProducts = totalProducts.filter(
    (product) => product.tags === "Special"
  );

  return (
    <>
      <MetaTitle
        title={"Sugar Silk Cake: Nền tảng mua sắm bánh đường tốt nhất!"}
      />
      <div className="home-container">
        <Carousel />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <img
            className="flex justify-center"
            src="/images/sugar.png"
            alt="Hình ảnh sản phẩm"
          />
        </div>
        <FlashDeals />
        <div className="mini-banner-section">
          <div className="mini-banners container">
            <img
              src="/images/quality_restoration_20250210111142533.jpg"
              alt="Banner sản phẩm"
            />
            <img
              src="/images/quality_restoration_20250210111234772.jpg"
              alt="Banner sản phẩm"
            />
            <img
              src="/images/quality_restoration_20250210111322142.jpg"
              alt="Banner sản phẩm"
            />
          </div>
        </div>
        <div className="home-sale">
          <div className="container">
            <h2 className="home-section-title">Dành riêng cho bạn</h2>
            <div className="home-special">
              {specialProducts.slice(0, 4)?.map((product, index) => (
                <FeaturedProduct key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
