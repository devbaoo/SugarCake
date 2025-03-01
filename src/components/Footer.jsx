import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCallOutline, IoHomeOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-rose-400 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-semibold">Sugar Silk - Cửa hàng bánh</h2>
          <p className="mt-3 ">
            Sugar Silk sẽ mang đến cho bạn những chiếc bánh ngọt thơm ngon béo ngậy với hương vị đặc trưng riêng. Mục tiêu của chúng tôi là mang lại niềm vui và hạnh phúc qua từng chiếc bánh, biến những khoảnh khắc bình dị thành những kỷ niệm đáng nhớ.          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 hover:text-rose-950 hover:cursor-pointer">
              <IoCallOutline className="text-lg" />
              <span>+84 945 337 450</span>
            </div>
            <div className="flex items-center gap-2 hover:text-rose-950 hover:cursor-pointer">
              <IoHomeOutline className="text-lg" />
              <span>Thu Duc, Ho Chi Minh</span>
            </div>
            <div className="flex items-center gap-2 hover:text-rose-950 hover:cursor-pointer">
              <FiMail className="text-lg" />
              <span>sugarsilkcake@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold">Trợ giúp & Thông tin</h2>
            <ul className="mt-3 space-y-2 ">
              <li><NavLink to="/about" className={"hover:text-rose-950 hover:cursor-pointer"}>Giới thiệu</NavLink></li>
              <li><NavLink to="/contact" className={"hover:text-rose-950 hover:cursor-pointer"}>Liên hệ</NavLink></li>
              <li><NavLink to="/terms-conditions" className={"hover:text-rose-950 hover:cursor-pointer"}>Điều khoản</NavLink></li>
              <li><NavLink to="/privacy-policy" className={"hover:text-rose-950 hover:cursor-pointer"} >Chính sách bảo mật</NavLink></li>
              <li><NavLink to="/faq" className={"hover:text-rose-950 hover:cursor-pointer"}>Câu hỏi thường gặp</NavLink></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Liên kết quan trọng</h2>
            <ul className="mt-3 space-y-2 ">
              <li><NavLink to="/profile" className={"hover:text-rose-950 hover:cursor-pointer"}>Tài khoản</NavLink></li>
              <li><NavLink to="/wishlist" className={"hover:text-rose-950 hover:cursor-pointer"}>Danh sách yêu thích</NavLink></li>
              <li><NavLink to="/cart" className={"hover:text-rose-950 hover:cursor-pointer"}>Giỏ hàng</NavLink></li>
              <li><NavLink to="/shipping-policy" className={"hover:text-rose-950 hover:cursor-pointer"}>Chính sách giao hàng</NavLink></li>
              <li><NavLink to="/sale" className={"hover:text-rose-950 hover:cursor-pointer"}>Khuyến mãi</NavLink></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-lg font-semibold">Bản tin</h2>
          <p className="mt-3">
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
        <p className="">&copy; 2025 SugarSilkCake. All rights reserved.</p>
        <div className="flex justify-center mt-4 md:mt-0 space-x-4">
          <Link to="https://www.facebook.com/profile.php?id=61572595452554&mibextid=wwXIfr&rdid=xC8WhK7F23643tD4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Dr1pbThaw%2F%3Fmibextid%3DwwXIfr#" className=" hover:text-white">
            <FaFacebookF size={18} className={"hover:text-rose-950 hover:cursor-pointer"} />
          </Link>
          <Link to="https://www.tiktok.com/@heathlycake?_r=1&_d=secCgYIASAHKAESPgo8nJmAAEDChpSC7iYkssHacVmCvPMyOKopg5CVWcpJUDaW261cpYCiANpja1sjz3qL9igtIHUrZd1lqRnzGgA%3D&checksum=592a4a7d815622cfb379eea89acd852abcb2050cf4e583c20c3f213aaa07b397&sec_uid=MS4wLjABAAAAipJD7tnHR0sJWcjR3UMlgxwJuX4z8rEpXaKw48ZQNoSuZNj39tI8CjM9HF7d2GI_&sec_user_id=MS4wLjABAAAA-Tr5n02v5nCoUGN4P-BWuuTua4OeKaiJ3J70SslA-7X6DaZh1c0BnXUpu0JzaZC5&share_app_id=1180&share_author_id=7206225517170377754&share_link_id=D16AEA37-4C15-4BB8-BB38-8FB6C8DB9F30&sharer_language=vi&social_share_type=5&source=h5_t&timestamp=1739115724&tt_from=copy&u_code=e3bci6c40j44lh&ug_btm=b2878%2Cb5836&user_id=7133263897947456513&utm_campaign=client_share&utm_medium=ios&utm_source=copy" className=" hover:text-white">
            <FaTiktok size={18} className={"hover:text-rose-950 hover:cursor-pointer"} />
          </Link>
          <Link to="https://www.instagram.com/sugarsilkisthere?igsh=MXExbWc4eGFvZTNoMw%3D%3D" className=" hover:text-white">
            <FaInstagram size={18} className={"hover:text-rose-950 hover:cursor-pointer"} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
