import  { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeCartItem, updateCartQty } from "../features/auth/userSlice";
import { RxCross2 } from "react-icons/rx";
import MetaTitle from "../components/MetaTitle";

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartProductDetails, setCartProductDetails] = useState({});

  useEffect(() => {
    dispatch(getCart());
    window.scrollTo(0, 0);
  }, [dispatch]);

  useEffect(() => {
    Object.entries(cartProductDetails).forEach(([pId, newQuantity]) => {
      dispatch(updateCartQty({ pId, quantity: newQuantity }));
    });
    setTimeout(() => {
      dispatch(getCart());
    }, 200);
  }, [cartProductDetails, dispatch]);

  const cartProducts = useSelector((state) => state?.auth?.getCart);

  const deleteCartItem = (id) => {
    dispatch(removeCartItem(id));
    setTimeout(() => {
      dispatch(getCart());
    }, 200);
  };

  useEffect(() => {
    let cartSum =
      cartProducts?.reduce((sum, item) => sum + Number(item.quantity * item.price), 0) || 0;
    setCartSubTotal(cartSum);
  }, [cartProducts]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 0) {
      setCartProductDetails((prev) => ({ ...prev, [id]: newQuantity }));
    }
  };

  return (
    <>
      <MetaTitle title={"Sản phẩm giỏ hàng của bạn"} />
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Giỏ hàng của bạn</h1>
          {cartProducts?.length === 0 ? (
            <p className="text-center text-gray-600">
              Giỏ hàng của bạn đang trống!{' '}
              <Link to="/shop" className="text-red-500 font-semibold hover:underline">
                Bắt đầu mua sắm
              </Link>
            </p>
          ) : (
            <>
              <div className="w-full xl:overflow-x-hidden overflow-x-scroll">
                <table className="w-full  border-gray-300 text-sm md:text-base">
                  <thead>
                    <tr className="bg-gray-100  text-left">
                      <th className="py-2 px-20">Sản phẩm</th>
                      <th className="py-2 px-20">Giá</th>
                      <th className="py-2 px-20">Số lượng</th>
                      <th className="py-2 px-20">Tổng cộng</th>
                      <th className="py-2 px-20">Xóa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts && cartProducts.map((item) => (
                      <tr key={item._id} className="border">
                        <td className="flex items-center py-4 px-8 space-x-4">
                          <img
                            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md"
                            src={item?.productId?.images[0].url}
                            alt="Product"
                          />
                          <span className="font-medium">{item?.productId?.title}</span>
                        </td>
                        <td className="py-4 px-16 font-semibold">
                          {Number(item?.price).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                        </td>
                        <td className="py-4 px-16">
                          <div className="flex items-center space-x-2">
                            <button
                              className="bg-gray-200 px-2 py-1 rounded-md hover:bg-gray-300"
                              onClick={() => updateQuantity(item._id, (cartProductDetails[item._id] || item.quantity) - 1)}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              className="w-12 text-center border rounded-md"
                              value={cartProductDetails[item._id] || item.quantity}
                              onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                            />
                            <button
                              className="bg-gray-200 px-2 py-1 rounded-md hover:bg-gray-300"
                              onClick={() => updateQuantity(item._id, (cartProductDetails[item._id] || item.quantity) + 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-24 font-semibold">
                          {Number(item?.price * (cartProductDetails[item._id] || item.quantity)).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                        </td>
                        <td className="py-4 px-20">
                          <RxCross2
                            size={24}
                            className="cursor-pointer text-red-500 hover:text-red-700"
                            onClick={() => deleteCartItem(item?._id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex flex-col md:flex-row md:justify-between items-center">
                <Link to="/shop" className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 flex items-center">
                  <FaArrowLeftLong className="mr-2" /> Tiếp tục mua sắm
                </Link>
                <div className="text-lg font-bold mt-4 md:mt-0">
                  Tổng: {Number(cartSubTotal).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                </div>
                <button
                  onClick={() => navigate("/checkout")}
                  className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 mt-4 md:mt-0"
                >
                  Thanh toán
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
