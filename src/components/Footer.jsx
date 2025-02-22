import { Link, NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-top container">
          <div className="footer-left">
            <h2>Sugar Silk - Cửa hàng bánh</h2>
            <p>
              Chúng tôi (Sugar Silk) cung cấp những chiếc bánh chất lượng cao
              với giá cả phải chăng. Tại đây, bạn có thể mua bánh chất lượng với
              giá ưu đãi. Bạn có thể mua mọi thứ từ Ứng dụng và Website của
              chúng tôi.
            </p>
            <div className="l-footer-item">
              <IoCallOutline />
              <span>Đường dây nóng 24/7:</span>
              <h2>0945337450</h2>
            </div>
            <div className="l-footer-item">
              <IoHomeOutline />
              <span>Thu Duc, Ho Chi Minh</span>
            </div>
            <div className="l-footer-item">
              <FiMail />
              <span>sugarsilkcake@gmail.com</span>
            </div>
          </div>
          <div className="footer-middle">
            <div className="f-middle-left">
              <h2>Trợ giúp và Thông tin</h2>
              <div className="footer-menu">
                <NavLink to={"/about"} className="fml-menu">
                  Giới thiệu
                </NavLink>
                <NavLink to={"/contact"} className="fml-menu">
                  Liên hệ chúng tôi
                </NavLink>
                <NavLink to={"/terms-conditions"} className="fml-menu">
                  Điều khoản & Điều kiện
                </NavLink>
                <NavLink to={"/privacy-policy"} className="fml-menu">
                  Chính sách bảo mật
                </NavLink>
                <NavLink to={"/faq"} className="fml-menu">
                  Câu hỏi thường gặp
                </NavLink>
              </div>
            </div>
            <div className="f-middle-right">
              <h2>Liên kết quan trọng</h2>
              <div className="footer-menu">
                <NavLink to={"/profile"} className="fml-menu">
                  Tài khoản
                </NavLink>
                <NavLink to={"/wishlist"} className="fml-menu">
                  Danh sách yêu thích
                </NavLink>
                <NavLink to={"/cart"} className="fml-menu">
                  Giỏ hàng của bạn
                </NavLink>
                <NavLink to={"/shipping-policy"} className="fml-menu">
                  Chính sách giao hàng
                </NavLink>
                <NavLink to={"/sale"} className="fml-menu">
                  Khuyến mãi
                </NavLink>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <h2>Sugar Silk Cake - Bản tin</h2>
            <p>
              Đăng ký ngay để nhận cập nhật về khuyến mãi và mã giảm giá. Đừng
              lo, chúng tôi không gửi spam.
            </p>
            <form
              className="form-control"
              // action='https://formspree.io/f/xbjnbred'
              method="POST"
            >
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Nhập địa chỉ email"
              />
              <button type="submit" className="btn">
                Đăng ký
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom container">
          <div className="footer-bottom-left">
            <p>
              &copy; Bản quyền thuộc về{" "}
              <Link className="copyright-name" to={"#"}>
                SugarSilkCakenote
              </Link>
            </p>
          </div>
          <div className="footer-bottom-right">
            <span>Kết nối với chúng tôi:</span>
            <div className="footer-social">
              <Link to={"#"}>
                <FaFacebookF size={15} color="#000" />
              </Link>
              <Link to={"#"}>
                <FaXTwitter size={15} color="#000" />
              </Link>
              <Link to={"#"}>
                <FaInstagram size={15} color="#000" />
              </Link>
              <Link to={"#"}>
                <FaPinterestP size={15} color="#000" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
