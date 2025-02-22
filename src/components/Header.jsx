import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
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
  // logout user
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  // drawer menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="header-container">
        <div className="topbar">
          <div className="header-top container">
            <div className="header-top-sections h-top-left">
              <div>
                <p>Thu Duc, Ho Chi Minh</p>
              </div>
              <span className="menu-line"></span>
              <div>
                <p>Hotline: +84945337450</p>
              </div>
            </div>
            <div className="header-top-sections ">
              {loggedUser && loggedUser ? (
                <Link onClick={handleLogout} className="top-checkout">
                  <p>Đăng xuất</p>
                </Link>
              ) : (
                <Link to={"/sign-in"} className="top-checkout">
                  <p>Đăng nhập</p>
                </Link>
              )}
              <span className="menu-line"></span>
              <Link to={"/profile"} className="top-checkout">
                <p>
                  Tên người dùng:{" "}
                  {loggedUser ? loggedUser.name : "Bạn cần đăng nhập lại!"}
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="header-main">
            <div className="header-left">
              <div className="logo ">
                <Link className="logo-link" to={"/"}>
                  <img
                    src={drLogo}
                    style={{ width: "80px" }}
                    alt="Sugar Cake"
                  />
                </Link>
                {/* <h2>sugarsilkcake</h2> */}
              </div>
            </div>
            <div className="header-middle">
              <div className="search_box">
                <div className="search">
                  <div className="select_area">
                    <div className="text search-menu">
                      <select name="search-category" id="search-category">
                        <option value="all-category">Danh mục</option>
                        {totalCategory.map((i, index) => {
                          return (
                            <option key={index} value={i.title}>
                              {i.title}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="search-main-container">
                    <div className="search-main">
                      <input
                        type="text"
                        className="search_text"
                        id="search_text"
                        placeholder="Tìm kiếm theo danh mục hoặc sản phẩm..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                      />
                      <IoSearchSharp className="search_icon" size={22} />
                    </div>
                    <div className="search-products">
                      {searchQuery && (
                        <div>
                          {filteredProducts
                            .slice(0, 10)
                            .map((product, index) => (
                              <div
                                className="search-product-details"
                                key={index}
                              >
                                <Link
                                  className="search-product-title"
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
                </div>
              </div>
            </div>

            <div className="header-right">
              <div>
                <Link to={"wishlist"} className="header-wishlist">
                  <FaRegHeart color="#fff" size={25} />
                  {loggedUser && loggedUser ? (
                    <span className="wishlist-count">
                      {wishlistItems?.length !== 0 ? wishlistItems?.length : 0}
                    </span>
                  ) : (
                    ""
                  )}
                </Link>
              </div>
              <div className="cart">
                <Link to={"/cart"}>
                  <HiOutlineShoppingCart color="#fff" size={25} />
                </Link>
                {loggedUser && loggedUser ? (
                  <span>
                    {cartProducts?.length !== 0 ? cartProducts?.length : 0}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="user">
                <Link to={"/profile"} title="">
                  <FaRegUser color="#fff" size={25} />
                  <span className="tooltip">
                    {loggedUser ? loggedUser.name : "Đăng nhập lại"}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="search-mobile-container">
            <div className="search-main-container">
              <div className="mobile-search">
                <input
                  type="text"
                  id="search_text_2"
                  placeholder="Tìm kiếm theo danh mục hoặc sản phẩm..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <IoSearchSharp className="search_icon" size={22} />
              </div>
              <div className="search-products">
                {searchQuery && (
                  <div>
                    {filteredProducts.slice(0, 10).map((product, index) => (
                      <div className="search-product-details" key={index}>
                        <Link
                          className="search-product-title"
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
          </div>
        </div>
        <div className="header-bottom">
          <div className="container h-bottom">
            <div className="h-bottom-left">
              <Link className="hamburger" onClick={toggleDrawer}>
                <IoMenu color="#fff" size={25} />
              </Link>
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="left"
                className="drawer-main"
              >
                <div className="header-drawer">
                  <div className="logo drawer-logo">
                    <Link className="logo-link" to={"/"}>
                      <img src={drLogo} alt="DR Store" />
                    </Link>
                  </div>
                  <div className="drawer-menu">
                    <NavLink to={"/"} className={"drawer-menu-item"}>
                      Trang chủ
                    </NavLink>
                    <NavLink to={"/profile"} className={"drawer-menu-item"}>
                      Hồ sơ
                    </NavLink>
                    <NavLink to={"/my-orders"} className={"drawer-menu-item"}>
                      Đơn hàng của tôi
                    </NavLink>
                    <NavLink to={"/wishlist"} className={"drawer-menu-item"}>
                      Danh sách yêu thích
                    </NavLink>
                    <NavLink to={"/shop"} className={"drawer-menu-item"}>
                      Cửa hàng
                    </NavLink>
                    <NavLink to={"/sale"} className={"drawer-menu-item"}>
                      Khuyến mãi
                    </NavLink>
                    <NavLink to={"/contact"} className={"drawer-menu-item"}>
                      Liên hệ
                    </NavLink>
                    <NavLink to={"/about"} className={"drawer-menu-item"}>
                      Giới thiệu
                    </NavLink>
                  </div>
                  <div className="header-drawer-btn ">
                    {loggedUser && loggedUser ? (
                      <Link onClick={handleLogout} className="drawer-btn">
                        <p>Đăng xuất</p>
                      </Link>
                    ) : (
                      <Link to={"/sign-in"} className="drawer-btn">
                        <p>Đăng nhập</p>
                      </Link>
                    )}
                  </div>
                </div>
              </Drawer>
              <div className="h-dropdown">
                <button>
                  Danh mục <IoIosArrowDown />
                </button>
                <div className="dropdown-options">
                  {totalCategory.map((i, index) => {
                    return (
                      <Link to={"/"} key={index}>
                        {i.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="h-bottom-middle">
              <NavLink to={"/"} className={"h-menu"}>
                Trang chủ
              </NavLink>
              <span className="menu-line"></span>
              <NavLink to={"/shop"} className={"h-menu"}>
                Cửa hàng
              </NavLink>
              <span className="menu-line"></span>
              <NavLink to={"/sale"} className={"h-menu"}>
                Khuyến mãi
              </NavLink>
              <span className="menu-line"></span>
              <NavLink to={"/contact"} className={"h-menu"}>
                Liên hệ
              </NavLink>
              <span className="menu-line"></span>
              <NavLink to={"/about"} className={"h-menu"}>
                Giới thiệu
              </NavLink>
            </div>
            <div className="h-bottom-right">
              <Link
                target="_blank"
                to={"https://www.facebook.com/profile.php?id=61572595452554"}
                className="chat-support"
              >
                <BiSupport size={22} />
                <span>Hỗ trợ chat</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
