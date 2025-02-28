import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistItems } from "../features/auth/userSlice";
import { addToWishlist } from "../features/products/productSlice";
import { toast } from "react-toastify";
import MetaTitle from "../components/MetaTitle";

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getWishlistItems());
  }, [dispatch]);

  const wishlistItems = useSelector((state) => state.auth?.wishlist?.wishlist);

  const removeWishlistItems = (itemId) => {
    dispatch(addToWishlist(itemId));
    toast.warning("Đã xóa sản phẩm khỏi danh sách yêu thích");
  };

  return (
    <>
      <MetaTitle title={"Danh sách yêu thích của bạn"} />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Danh sách yêu thích</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {wishlistItems?.length === 0 && (
            <p className="text-gray-500 text-center text-lg">
              Danh sách yêu thích của bạn đang trống! {" "}
              <Link to="/shop" className="text-blue-500 hover:underline">Bắt đầu mua sắm</Link>
            </p>
          )}
          {wishlistItems?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative"
            >
              <div className="relative cursor-pointer" onClick={() => navigate(`/product/${item?._id}`)}>
                <img
                  src={item.images[0].url}
                  alt="Hình ảnh sản phẩm"
                  className="w-full h-48 object-cover rounded-md"
                />
                <button
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  onClick={() => removeWishlistItems(item?._id)}
                >
                  <RxCross2 size={24} />
                </button>
              </div>
              <div className="mt-4 text-center">
                <Link to={`/product/${item?._id}`} className="text-lg font-medium hover:text-blue-500">
                  {item?.title}
                </Link>
                <p className="text-gray-700 mt-2 font-semibold">
                  Giá: {Number(item?.price).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;