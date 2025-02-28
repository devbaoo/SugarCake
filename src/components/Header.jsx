import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoExit, IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../features/category/categorySlice";
import { getCart, getWishlistItems } from "../features/auth/userSlice";
import { BiSupport } from "react-icons/bi";
import drLogo from "/public/logovip.png";
import Drawer from "react-modern-drawer";
import { motion } from "framer-motion";
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getWishlistItems());
    dispatch(getCart());
  }, [dispatch]);

  const totalCategory = useSelector((state) => state?.category?.category);
  const loggedUser = useSelector((state) => state?.auth?.user);
  const products = useSelector((state) => state.product?.products);
  const wishlistItems = useSelector((state) => state.auth?.wishlist?.wishlist);
  const cartProducts = useSelector((state) => state?.auth?.getCart);

  const [searchQuery, setSearchQuery] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // State for popover visibility

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const resetSearch = (id) => {
    navigate(`/product/${id}`);
    window.location.reload();
    setSearchQuery("");
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="bg-rose-400 text-white">
        <div className="flex justify-between items-center p-4">
          <div className="md:flex hidden space-x-4">
            <p>Thu Duc, Ho Chi Minh</p>
            <span className="border-l border-pink-800 h-4"></span>
            <p>Hotline: +84 945337450</p>
          </div>
          <div className="flex space-x-4">
            {loggedUser ? (
              <Link onClick={handleLogout} className="hover:underline">
                Đăng xuất
              </Link>
            ) : (
              <Link to={"/sign-in"} className="hover:underline">
                Đăng nhập
              </Link>
            )}
            <span className="border-l border-pink-800 h-4"></span>
            <Link to={"/profile"} className="hover:underline">
              Tên người dùng: {loggedUser ? loggedUser.name : "Bạn cần đăng nhập lại!"}
            </Link>
          </div>
        </div>

        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to={"/"}>
              <img src={drLogo} className="w-20" alt="Sugar Cake" />
            </Link>
          </div>

          <div className="flex-grow mx-4">
            <div className="relative">
              <input
                type="text"
                className="w-full p-2 rounded border text-black border-gray-300 focus:outline-none focus:ring focus:ring-pink-500"
                placeholder="Tìm kiếm theo danh mục hoặc sản phẩm..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <IoSearchSharp className="absolute right-2 top-2 text-gray-500" size={22} />
              {searchQuery && (
                <div className="absolute z-10 bg-white text-black w-full mt-1 rounded shadow-lg">
                  {filteredProducts.slice(0, 10).map((product, index) => (
                    <div className="p-2 hover:bg-gray-200" key={index}>
                      <Link
                        className="block"
                        onClick={() => resetSearch(product?._id)}
                      >
                        {product?.title}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to={"wishlist"} className="relative">
              <FaRegHeart size={25} />
              {loggedUser && wishlistItems?.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <Link to={"/cart"} className="relative">
              <HiOutlineShoppingCart size={25} />
              {loggedUser && cartProducts?.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartProducts.length}
                </span>
              )}
            </Link>
            <Link to={"/profile"}>
              <FaRegUser size={25} />
              <span className="tooltip">{loggedUser ? loggedUser.name : "Đăng nhập lại"}</span>
            </Link>
          </div>
        </div>

        <div className="bg-rose-300">
          <div className="container mx-auto flex justify-between  items-center py-2">
            <div className="flex items-center md:pl-5 md:pr-5">
              <button onClick={toggleDrawer} className="text-white">
                <IoMenu size={25} />
              </button>
              {/* <div className="relative">
                <button
                  className="flex items-center text-white"
                  onClick={() => setIsPopoverOpen((prev) => !prev)} // Toggle popover visibility
                >
                  Danh mục <IoIosArrowDown />
                </button>
                {isPopoverOpen && ( // Conditionally render the popover
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg z-50"
                  >
                    {totalCategory.map((i, index) => (
                      <Link to={"/"} key={index} className="block px-4 py-2 hover:bg-gray-200">
                        {i.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div> */}
            </div>
            <div className="md:flex space-x-8 hidden">
              <NavLink to={"/"} className=" font-bold ">Trang chủ</NavLink>
              <NavLink to={"/shop"} className=" font-bold">Cửa hàng</NavLink>
              <NavLink to={"/sale"} className=" font-bold">Khuyến mãi</NavLink>
              <NavLink to={"/contact"} className=" font-bold">Liên hệ</NavLink>
              <NavLink to={"/about"} className=" font-bold">Giới thiệu</NavLink>
            </div>
            <Link
              target="_blank"
              to={"https://www.facebook.com/profile.php?id=61572595452554"}
              className="flex items-center text-white hover:underline"
            >
              <BiSupport size={22} />
              <span className="ml-1 font-bold">Hỗ trợ chat</span>
            </Link>
          </div>
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="drawer-main"
        >
          <div className="p-4 bg-rose-400 h-full text-white">
            <div className="flex items-center justify-between">
              <Link to={"/"}>
                <img src={drLogo} alt="Sugar Silk Cake" className="w-20" />
              </Link>
              <button onClick={toggleDrawer} className="text-white">
                <IoExit size={25} />
              </button>
            </div>
            <div className="mt-4">
              <NavLink to={"/"} className={"block py-2 hover:bg-rose-500 hover:rounded-xl hover:p-2"}>
                Trang chủ
              </NavLink>
              <NavLink to={"/profile"} className={"block py-2 hover:bg-rose-500 hover:rounded-xl hover:p-2"}>
                Hồ sơ
              </NavLink>
              <NavLink to={"/my-orders"} className={"block py-2 hover:bg-rose-500 hover:rounded-xl hover:p-2"}>
                Đơn hàng của tôi
              </NavLink>
              <NavLink to={"/wishlist"} className={"block py-2 hover:bg-rose-500 hover:rounded-xl hover:p-2"}>
                Danh sách yêu thích
              </NavLink>
              <NavLink to={"/shop"} className={"block py-2 hover:bg-rose-500 hover:rounded-xl hover:p-2"}>
                Cửa hàng
              </NavLink>
              <NavLink to={"/sale"} className={"block py-2 hover:bg-rose-500 hover:rounded-xl hover:p-2"}>
                Khuyến mãi
              </NavLink>
              <NavLink to={"/contact"} className={"block py-2 hover:bg-rose-500 hover:rounded-xl hover:p-2"}>
                Liên hệ
              </NavLink>
              <NavLink to={"/about"} className={"block py-2 hover:bg-rose-500 hover:rounded-xl hover:p-2"}>
                Giới thiệu
              </NavLink>
            </div>
            <div className="mt-4">
              {loggedUser ? (
                <Link onClick={handleLogout} className="block py-2 hover:bg-rose-500 hover:rounded-xl hover:p-2">
                  Đăng xuất
                </Link>
              ) : (
                <Link to={"/sign-in"} className="block py-2 hover:bg-rose-500 hover:rounded-xl hover:p-2">
                  Đăng nhập
                </Link>
              )}
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Header;