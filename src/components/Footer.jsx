import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCallOutline, IoHomeOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-semibold">Sugar Silk - Cửa hàng bánh</h2>
          <p className="mt-3 text-gray-400">
          Sugar Silk sẽ mang đến cho bạn những chiếc bánh ngọt thơm ngon béo ngậy với hương vị đặc trưng riêng. Mục tiêu của chúng tôi là mang lại niềm vui và hạnh phúc qua từng chiếc bánh, biến những khoảnh khắc bình dị thành những kỷ niệm đáng nhớ.          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <IoCallOutline className="text-lg" />
              <span>+84 945 337 450</span>
            </div>
            <div className="flex items-center gap-2">
              <IoHomeOutline className="text-lg" />
              <span>Thu Duc, Ho Chi Minh</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-lg" />
              <span>sugarsilkcake@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold">Trợ giúp & Thông tin</h2>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li><NavLink to="/about">Giới thiệu</NavLink></li>
              <li><NavLink to="/contact">Liên hệ</NavLink></li>
              <li><NavLink to="/terms-conditions">Điều khoản</NavLink></li>
              <li><NavLink to="/privacy-policy">Chính sách bảo mật</NavLink></li>
              <li><NavLink to="/faq">Câu hỏi thường gặp</NavLink></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Liên kết quan trọng</h2>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li><NavLink to="/profile">Tài khoản</NavLink></li>
              <li><NavLink to="/wishlist">Danh sách yêu thích</NavLink></li>
              <li><NavLink to="/cart">Giỏ hàng</NavLink></li>
              <li><NavLink to="/shipping-policy">Chính sách giao hàng</NavLink></li>
              <li><NavLink to="/sale">Khuyến mãi</NavLink></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-lg font-semibold">Bản tin</h2>
          <p className="mt-3 text-gray-400">
            Đăng ký để nhận cập nhật về khuyến mãi và mã giảm giá. Chúng tôi không gửi spam.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Nhập email"
              className="p-2 text-gray-900 rounded-l-md focus:outline-none"
            />
            <button type="submit" className="px-4 text-center bg-red-500 text-white rounded-r-md hover:bg-red-600">
              Đăng ký
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 px-6 text-center md:flex md:justify-between md:items-center">
        <p className="text-gray-400">&copy; 2024 SugarSilkCake. All rights reserved.</p>
        <div className="flex justify-center mt-4 md:mt-0 space-x-4">
          <Link to="#" className="text-gray-400 hover:text-white">
            <FaFacebookF size={18} />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white">
            <FaXTwitter size={18} />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white">
            <FaInstagram size={18} />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white">
            <FaPinterestP size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
