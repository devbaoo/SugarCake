import React, { useEffect, useMemo } from "react";
import FeaturedProduct from "../components/FeaturedProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";
import MetaTitle from "../components/MetaTitle";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const totalProduct = useSelector((state) => state?.product?.products);
  const totalProducts = [...totalProduct].reverse();

  const cakeProducts = useMemo(
    () => totalProducts.filter((product) => product.category === "Bánh"),
    [totalProducts]
  );

  const bagProducts = useMemo(
    () => totalProducts.filter((product) => product.category === "Giỏ "),
    [totalProducts]
  );

  return (
    <>
      <MetaTitle title={"Shop: Buy your favourite Items"} />
      <div className="px-4 md:px-10 lg:px-20 py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Cửa Hàng</h1>
        </div>

        {/* Sản phẩm bánh */}
        <div className="text-2xl font-bold text-rose-500 mb-6">Bánh ngọt</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cakeProducts.map((product, index) => (
            <FeaturedProduct key={index} product={product} />
          ))}
        </div>

        {/* Sản phẩm giỏ */}
        <div className="text-2xl font-bold text-rose-500 mt-20 mb-6">Box - Giỏ bánh</div>
        <div className="grid sm:pl-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {bagProducts.map((product, index) => (
            <FeaturedProduct key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
