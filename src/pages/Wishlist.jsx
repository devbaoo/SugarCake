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
  });
  const wishlistItems = useSelector((state) => state.auth?.wishlist?.wishlist);
  const removeWishlistItems = (itemId) => {
    dispatch(addToWishlist(itemId));
    toast.warning("Product Removed from Wishlist!");
  };
  return (
    <>
      <MetaTitle title={"Danh sách yêu thích của bạn"} />
      <div className="wishlist-container">
        <h2>Danh sách yêu thích</h2>
        <div className="container wishlist-section">
          {wishlistItems?.length === 0 && (
            <p className="empty-wishlist">
              Danh sách yêu thích của bạn đang trống!{" "}
              <Link to={"/shop"}>Bắt đầu mua sắm</Link>
            </p>
          )}
          {wishlistItems?.map((items, index) => {
            return (
              <div className="wishlist" key={index}>
                <div className="wishlist-img">
                  <img
                    onClick={() => navigate(`/product/${items?._id}`)}
                    src={`${items.images[0].url}`}
                    alt="Hình ảnh sản phẩm"
                  />
                  <div className="remove-item">
                    <RxCross2
                      size={30}
                      onClick={() => removeWishlistItems(items?._id)}
                    />
                  </div>
                </div>
                <div className="wishlist-title">
                  <Link
                    to={`/product/${items?._id}`}
                    className="wishlist-product-title"
                  >
                    <h3>{items?.title}</h3>
                  </Link>
                </div>
                <div className="price">
                  <span>Giá:</span>{" "}
                  {Number(items?.price).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
