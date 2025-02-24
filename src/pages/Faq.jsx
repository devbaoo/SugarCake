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
                Sugar Silk chấp nhận những hình thức thanh toán nào?
              </p>
              <div className="faq-arrow"></div>
              <p className="faq-text">
                Bạn có thể mua hàng, đặt hàng và thanh toán trực tiếp qua
                website bằng phương thức chuyển khoản ngân hàng, hoặc thông qua
                nền tảng khác có thể thanh toán qua ví điện tử tiện lợi (momo,
                zalopay, VNpay,...)
              </p>
            </label>
            <input id="faq-b" type="checkbox" />
            <label htmlFor="faq-b">
              <p className="faq-heading">Chính sách đổi trả?</p>
              <div className="faq-arrow"></div>
              <p className="faq-text">
                <strong>a. Điều kiện đổi trả:</strong>
                <br />
                • Chấp nhận đổi hoặc trả hàng trong vòng 1-2 giờ kể từ khi nhận
                hàng, nếu bánh bị lỗi hoặc không đúng yêu cầu.
                <br />
                • Sản phẩm không thể đổi trả nếu đã được khách hàng sử dụng hoặc
                bị hư hỏng do lỗi từ phía khách hàng.
                <br />
                <br />
                <strong>b. Quy trình đổi trả:</strong>
                <br />
                • Để yêu cầu đổi hoặc trả, vui lòng liên hệ với chúng tôi qua
                tin nhắn trên Facebook, Instagram hoặc Tiktok trong vòng 1-2 giờ
                kể từ khi nhận hàng.
                <br />
                • Quý khách cần cung cấp thông tin về tình trạng sản phẩm và gửi
                hình ảnh kèm theo nếu có sự cố xảy ra.
                <br />
                <br />
                <strong>c. Điều kiện không được đổi trả:</strong>
                <br />
                • Sản phẩm đã bị thay đổi, sử dụng hoặc không còn nguyên vẹn như
                lúc giao.
                <br />
                • Sản phẩm hết hạn hoặc không còn trong tình trạng bảo quản tốt.
                <br />
                <br />
                <strong>d. Quy trình hoàn tiền:</strong>
                <br />
                • Trong trường hợp sản phẩm không đạt yêu cầu và quý khách yêu
                cầu hoàn tiền, chúng tôi sẽ hoàn tiền trong vòng 24h sau khi
                nhận được sản phẩm trả lại.
                <br />• Trường hợp khác, SugarSilk sẽ đổi cho quý khách sản phẩm
                mới kèm voucher ưu đãi đặc biệt.
              </p>
            </label>
            <input id="faq-c" type="checkbox" />
            <label htmlFor="faq-c">
              <p className="faq-heading">
                Đơn hàng của tôi mất bao lâu để giao đến nơi?
              </p>
              <div className="faq-arrow"></div>
              <p className="faq-text">
                <strong>a. Hình thức mua hàng:</strong>
                <br />
                • Quý khách có thể mua sản phẩm thông qua các kênh Facebook,
                Instagram và Tiktok hoặc truy cập Website. Để đặt hàng, vui lòng
                nhắn tin trực tiếp cho SugarSilkCake hoặc comment dưới bài đăng.
                <br />
                <br />
                <strong>Về thời gian nhận hàng:</strong>
                <br />
                • Vì là loại bánh tươi, sử dụng ngay, để đảm bảo độ tươi ngon và
                giữ được hương vị, Sugar Silk sẽ thực hiện quy trình làm bánh
                vào mỗi T7 hàng tuần và sẽ hoàn thành đơn hàng vào Thứ 7, Chủ
                Nhật, Thứ 2 hàng tuần. Vì vậy, trong thời gian này, mong quý
                khách hàng sẽ thông cảm và ủng hộ Sugar Silk. Đồng thời, Sugar
                Silk cũng sẽ cố gắng hoàn thiện hơn để phát triển và nâng cấp hệ
                thống làm việc để có thể đáp ứng nhu cầu nhận đơn hàng trong
                thời gian sớm nhất dành cho quý khách hàng.
                <br />
                <br />
                <strong>b. Phí vận chuyển:</strong>
                <br />
                • Phí vận chuyển được tính tùy thuộc vào địa điểm giao hàng. Quý
                khách sẽ được thông báo trước khi xác nhận đơn hàng.
                <br />• Đơn hàng trong nội thành có thể miễn phí vận chuyển
                trong phạm vi 10 km. Phạm vi ngoài mức quy định sẽ được tính phí
                với giá trị nhất định được áp dụng với đội ngũ giao hàng Sugar
                Silk.
              </p>
            </label>
            <input id="faq-d" type="checkbox" />
            <label htmlFor="faq-d">
              <p className="faq-heading">
                Thông tin của tôi có được bảo mật khi mua hàng trên website của
                bạn không?
              </p>
              <div className="faq-arrow"></div>
              <p className="faq-text">
                Sugar Silk luôn đặt sự uy tín và chất lượng lên hàng đầu, vì vậy
                quý khách hàng hãy yên tâm khi đặt hàng và sử dụng thông tin
                trên website của chúng tôi. Sugar Silk cam kết bảo mật thông tin
                cá nhân của khách hàng cho bất kỳ trường hợp nào.
              </p>
            </label>
            <input id="faq-e" type="checkbox" />
            <label htmlFor="faq-e">
              <p className="faq-heading">
                Bạn có cung cấp giảm giá cho đơn hàng số lượng lớn không?
              </p>
              <div className="faq-arrow"></div>
              <p className="faq-text">
                Nếu bạn là đối tác doanh nghiệp hoặc mua hàng với số lượng lớn
                (trên 20 sản phẩm), hãy liên hệ trực tiếp với Sugar Silk để nhận
                được chi tiết bảng gía dành cho đối tác doanh nghiệp B2B và tư
                vấn cụ thể hơn nhé.
              </p>
            </label>
          </div>
          <div className="shipping-polity-details">
            <h2>Cách đặt lại mật khẩu bị quên?</h2>
            <ul>
              <li>
                Nhấp vào "Quên mật khẩu?" (được đề cập trên cửa sổ "Đăng nhập
                bằng Email" và "Hồ sơ").
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
