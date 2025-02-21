import React from "react";
import MetaTitle from "../components/MetaTitle";

const Faq = () => {
  return (
    <>
      <MetaTitle title={"Các câu hỏi thường gặp"} />
      <div className="faq-container">
        <div className="container">
          <h2 className="faq-title">Các câu hỏi thường gặp</h2>
          <div className="faq">
            <input id="faq-a" type="checkbox" />
            <label htmlFor="faq-a">
              <p className="faq-heading">
                Bạn chấp nhận những phương thức thanh toán nào?
              </p>
              <div className="faq-arrow"></div>
              <p className="faq-text">
                Khách hàng thường muốn biết các phương thức thanh toán có sẵn.
                Bạn có thể liệt kê các phương thức thanh toán mà cửa hàng của
                bạn chấp nhận, chẳng hạn như thẻ tín dụng/thẻ ghi nợ, PayPal,
                chuyển khoản ngân hàng hoặc bất kỳ cổng thanh toán nào khác mà
                bạn hỗ trợ.
              </p>
            </label>
            <input id="faq-b" type="checkbox" />
            <label htmlFor="faq-b">
              <p className="faq-heading">Chính sách đổi trả của bạn là gì?</p>
              <div className="faq-arrow"></div>
              <p className="faq-text">
                Việc cung cấp chi tiết về chính sách đổi trả của bạn giúp khách
                hàng tự tin hơn khi mua sắm. Hãy giải thích các điều kiện đổi
                trả, bao gồm thời hạn, yêu cầu về tình trạng sản phẩm và liệu có
                phí tái nhập kho hay không.
              </p>
            </label>
            <input id="faq-c" type="checkbox" />
            <label htmlFor="faq-c">
              <p className="faq-heading">
                Đơn hàng của tôi mất bao lâu để đến nơi?
              </p>
              <div className="faq-arrow"></div>
              <p className="faq-text">
                Thời gian giao hàng là thông tin quan trọng đối với khách hàng,
                đặc biệt nếu họ cần sản phẩm trước một ngày cụ thể. Hãy cung cấp
                thời gian giao hàng ước tính dựa trên phương thức giao hàng và
                điểm đến. Ngoài ra, hãy cung cấp tùy chọn theo dõi đơn hàng nếu
                có.
              </p>
            </label>
            <input id="faq-d" type="checkbox" />
            <label htmlFor="faq-d">
              <p className="faq-heading">
                Thông tin cá nhân và thanh toán của tôi có được bảo mật trên
                trang web của bạn không?
              </p>
              <div className="faq-arrow"></div>
              <p className="faq-text">
                Mối quan tâm về bảo mật là điều phổ biến đối với khách hàng mua
                sắm trực tuyến. Hãy đảm bảo với khách hàng về các biện pháp bảo
                mật hiện có, chẳng hạn như mã hóa SSL cho việc truyền dữ liệu,
                tuân thủ PCI cho xử lý thanh toán và bất kỳ chứng chỉ bảo mật
                nào khác mà trang web của bạn có.
              </p>
            </label>
            <input id="faq-e" type="checkbox" />
            <label htmlFor="faq-e">
              <p className="faq-heading">
                Bạn có cung cấp giảm giá cho đơn hàng số lượng lớn hoặc bán buôn
                không?
              </p>
              <div className="faq-arrow"></div>
              <p className="faq-text">
                Một số khách hàng có thể quan tâm đến việc mua hàng với số lượng
                lớn hoặc đặt hàng bán buôn để bán lại. Hãy làm rõ liệu cửa hàng
                của bạn có cung cấp giảm giá hoặc giá đặc biệt cho những đơn
                hàng như vậy, và cung cấp chi tiết về cách khách hàng có thể tìm
                hiểu về các tùy chọn mua hàng số lượng lớn.
              </p>
            </label>
          </div>
          <div className="shipping-polity-details">
            <h2>Cách đặt lại mật khẩu bị quên?</h2>
            <ul>
              <li>
                Nhấp vào “Quên mật khẩu?” (được đề cập trên cửa sổ “Đăng nhập
                bằng Email” và “Hồ sơ”).
              </li>
              <li>
                Nhập địa chỉ email đã đăng ký của bạn. Bạn sẽ nhận được email
                chứa liên kết đặt lại mật khẩu.
              </li>
              <li>
                Làm theo các bước được hiển thị trên màn hình. Mật khẩu của bạn
                sẽ được đặt lại.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
