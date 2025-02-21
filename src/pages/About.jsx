import MetaTitle from "../components/MetaTitle";

const About = () => {
  return (
    <>
      <MetaTitle title={"Giới thiệu: Công ty của chúng tôi"} />
      <div className="about-container">
        <div className="container">
          <div className="about-content">
            <div className="about-image-container">
              <img
                src="/images/quality_restoration_20250210111322142.jpg"
                alt="Giới thiệu về chúng tôi"
                className="about-image"
              />
            </div>
            <div className="about-text-container">
              <span className="about-section-label">Về chúng tôi</span>
              <h2 className="about-section-heading">
                Giới thiệu{" "}
                <span className="company-name">Công ty của chúng tôi</span>
              </h2>
              <p className="about-section-description">
                Chúng tôi (Sugar Cake) cung cấp các sản phẩm chất lượng cao với
                giá cả phải chăng. Tại đây, bạn có thể mua các sản phẩm chất
                lượng với mức giá ưu đãi. Bạn có thể mua bất cứ thứ gì từ Ứng
                dụng và Website của chúng tôi.
                <br />
                <br />
                Chúng tôi có kho hàng phong phú với các sản phẩm từ thời trang,
                mỹ phẩm, đến đồ gia dụng và sản phẩm cho nhà bếp, và nhiều hơn
                nữa. Với hơn 4 triệu sản phẩm và trên 300 danh mục, Sugar Cake
                chắc chắn có mọi thứ bạn cần.
                <br />
                <br />
                Trong bộ sưu tập mới nhất của chúng tôi, bạn sẽ tìm thấy tất cả
                các mặt hàng phổ biến và xu hướng với mức giá phải chăng, giúp
                bạn tự tin khi tìm kiếm quần áo mới, phụ kiện, hay đơn giản là
                một số mặt hàng hàng ngày cho gia đình. Sugar Cake có tất cả
                những gì bạn cần.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
