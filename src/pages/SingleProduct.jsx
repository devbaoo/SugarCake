import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  getProduct,
  getProducts,
  rateProduct,
} from "../features/products/productSlice";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import ReactStars from "react-rating-stars-component";
import { addToCart, getCart } from "../features/auth/userSlice";
import { useNavigate } from "react-router-dom";
import FeaturedProduct from "../components/FeaturedProduct";
import MetaTitle from "../components/MetaTitle";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartItem, setCartItem] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [currentImage, setCurrentImage] = useState(null); // State for current image
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const productId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(getProduct(productId));
    setTimeout(() => {
      setImageLoading(false);
    }, 600);
    dispatch(getCart());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const product = useSelector((state) => state?.product?.product);
  const cartProducts = useSelector((state) => state?.auth?.getCart);

  const addItemToWishlist = (prodId) => {
    dispatch(addToWishlist(prodId));
    toast.success("Đã thêm sản phẩm vào danh sách yêu thích");
  };

  useEffect(() => {
    for (let i = 0; i < cartProducts?.length; i++) {
      if (productId === cartProducts[i]?.productId?._id) {
        setCartItem(true);
      }
    }
  });

  const addProductToCart = () => {
    dispatch(
      addToCart({ productId, quantity, color, price: product?.price })
    );
    setTimeout(() => {
      navigate("/cart");
    }, 800);
    dispatch(getCart());
  };

  useEffect(() => {
    dispatch(getProducts());
    setCurrentImage(product?.images[0]?.url)
  }, [imageLoading]);

  const totalProduct = useSelector((state) => state?.product?.products);
  const totalProducts = [...totalProduct].reverse();
  const popularProducts = totalProducts.filter(
    (product) => product?.tags === "popular"
  );

  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);

  const addProductRating = () => {
    if (star === null) {
      toast.error("Please choose star rating");
      return false;
    } else if (comment === null) {
      toast.error("Please Write a Review first.");
      return false;
    } else {
      dispatch(
        rateProduct({
          star: star,
          comment: comment,
          productId: productId,
        })
      );
      setTimeout(() => {
        dispatch(getProduct(productId));
      }, 200);
    }
  };

  return (
    <>
      <MetaTitle title={product?.title} />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Image Gallery */}
          <div className="flex-1">
            <div className="relative">
              {imageLoading ? (
                <div className="loader"></div>
              ) : (
                <div className="flex flex-col">
                  <img
                    src={`${currentImage}`}
                    alt="Hình ảnh sản phẩm"
                    className="w-full h-[750px] object-cover rounded-lg shadow-lg cursor-pointer"
                    onClick={() => {
                      setCurrentImage(product?.images[0]?.url);
                    }}
                  />
                  {
                    product.images.length > 1 && (
                      <div className="flex space-x-2 mt-2 overflow-x-auto">
                        {product?.images.map((image, index) => (
                          <img
                            key={index}
                            src={image.url}
                            alt={`Product Image ${index + 1}`}
                            className="w-24 h-24 object-cover rounded-md cursor-pointer transition-transform duration-300 hover:scale-105"
                            onClick={() => {
                              setCurrentImage(image.url);
                            }}
                          />
                        ))}
                      </div>
                    )
                  }
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 mt-4 md:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800">{product?.title}</h2>
            <ReactStars
              count={5}
              value={Number(product?.totalRating) || 0}
              edit={false}
              size={18}
              activeColor="#FF504E"
            />
            {/* <div
              className="mt-2 text-gray-600"
              dangerouslySetInnerHTML={{
                __html: product?.description.substr(0, 100),
              }}
            ></div> */}
            <div className="mt-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">Danh mục:</span>
                <div className="flex justify-end items-center mt-3">
                  <span>{product?.category}</span>
                  <span className="bg-red-500 ml-2 p-2 text-xs rounded-2xl font-semibold text-white">{product?.tags}</span>
                </div>
              </div>

            </div>

            {cartItem === false && (
              <div className="mt-4">
                <div className="flex items-center">
                  <span className="font-medium">Số lượng:</span>
                  <input
                    type="number"
                    min={1}
                    placeholder="SL"
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}
                    className="ml-2 border border-gray-300 rounded-md p-1 w-16"
                  />
                </div>
              </div>
            )}

            <div className="mt-4">
              <div className="flex justify-between">
                <span className="font-medium">Giá:</span>
                <span className="text-red-500 font-bold">
                  {Number(product?.price).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
              {/* <div className="flex justify-between">
                <span className="font-medium">Tồn kho:</span>
                <span>{String(product?.quantity - product?.sold)}</span>
              </div> */}
            </div>

            <div className="mt-4 flex justify-between gap-4">
              {cartItem ? (
                <Link to={"/cart"} className="w-full">
                  <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300 shadow-md">
                    Đi đến giỏ hàng
                  </button>
                </Link>
              ) : (
                <button
                  onClick={addProductToCart}
                  className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300 shadow-md"
                >
                  Thêm vào giỏ hàng
                </button>
              )}
              <button
                onClick={() => addItemToWishlist(product?._id)}
                className="w-full bg-gray-300 text-gray-800 py-3 rounded-lg hover:bg-gray-400 transition duration-300 shadow-md"
              >
                Thêm vào danh sách yêu thích
              </button>
            </div>


            <div className="mt-4">
              <h4 className="font-semibold">Vận chuyển & Đổi trả</h4>
              <p>
                Giao hàng trong 3-4 giờ làm việc <br />
              </p>
            </div>
          </div>
        </div>

        <hr className="my-6" />

        <div className="prod-description">
          <h2 className="text-xl font-semibold">Mô tả</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: product?.description,
            }}
            className="mt-2 text-gray-700"
          ></div>
        </div>

        <hr className="my-6" />

        <div className="prod-review">
          <h2 className="text-xl font-semibold">Viết đánh giá</h2>
          <div className="mt-4">
            <ReactStars
              count={5}
              value={3}
              edit={true}
              size={18}
              activeColor="#FF504E"
              onChange={(e) => {
                setStar(e);
              }}
            />
            <textarea
              type="text"
              placeholder="Viết đánh giá của bạn tại đây..."
              rows="6"
              className="w-full border border-gray-300 rounded-md p-2 mt-2"
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
            <div className="mt-2">
              <button
                type="button"
                onClick={addProductRating}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Gửi
              </button>
            </div>
          </div>

          {product && product?.rating.length !== 0 && <h2 className="mt-4 text-lg font-semibold">Đánh giá gần đây</h2>}
          {product &&
            product?.rating.slice(0, 5)?.map((item, index) => {
              return (
                <div key={index} className="recent-reviews mt-2">
                  <h3 className="font-semibold">{item?.postedBy?.name}</h3>
                  <ReactStars
                    count={5}
                    value={item?.star}
                    edit={false}
                    size={18}
                    activeColor="#FF504E"
                  />
                  <p className="text-gray-600">{item?.comment}</p>
                </div>
              );
            })}
        </div>

        <div className="popular-products mt-8">
          <h1 className="text-xl font-semibold">Sản phẩm phổ biến</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {popularProducts?.slice(0, 4)?.map((product, index) => {
              return <FeaturedProduct key={index} product={product} />;
            })}
          </div>
        </div>
      </div>

    </>
  );
};

export default SingleProduct;