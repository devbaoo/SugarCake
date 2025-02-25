import MetaTitle from "../components/MetaTitle";
import "./about.css";
const About = () => {
  return (
    <>
      <MetaTitle title={"Giới thiệu: Sugar Silk"} />
      <div className="about-container">
        <div className="about-content">
          <div className="about-image-container">
            <img
              src="/public/logovip.png"
              alt="Giới thiệu về Sugar Silk"
              className="about-image"
            />
          </div>
          <div className="about-text-container">
            <span className="about-section-label">Về chúng tôi</span>
            <h2 className="about-section-heading">
              Giới thiệu <span className="company-name">Sugar Silk</span>
            </h2>
            <p className="about-section-description">
              Chào mừng đến với Sugar Silk – nơi mang đến cho bạn những trải
              nghiệm ẩm thực ngọt ngào và độc đáo. Chúng tôi chuyên tạo ra những
              chiếc bánh ngọt thơm ngon với hương vị đặc trưng, được thiết kế
              tinh tế và cá nhân hóa theo sở thích của từng khách hàng.
              <br />
              <br />
              Tại Sugar Silk, niềm vui và sự sáng tạo của khách hàng luôn được
              đặt lên hàng đầu. Bạn có thể tự do mix và kết hợp các loại bánh để
              tạo thành set quà tặng ý nghĩa cho người thân yêu, biến những
              khoảnh khắc bình dị thành những kỷ niệm đáng nhớ.
              <br />
              <br />
              Ngoài ra, chúng tôi thường xuyên tổ chức các sự kiện và mini game
              thú vị, nhằm kết nối và mang đến những trải nghiệm độc đáo cho
              khách hàng. Với cam kết về chất lượng sản phẩm cao cấp cùng mức
              giá hợp lý, Sugar Silk hy vọng sẽ là người bạn đồng hành tin cậy
              trong từng khoảnh khắc ngọt ngào của cuộc sống.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
