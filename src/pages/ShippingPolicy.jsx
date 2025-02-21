import React from "react";
import MetaTitle from "../components/MetaTitle";

const ShippingPolicy = () => {
  return (
    <>
      <MetaTitle title={"Chính sách giao hàng của chúng tôi"} />
      <div className="shipping-container">
        <div className="container">
          <h1 className="shipping-heading">Chính sách giao hàng</h1>
          <div className="shipping-polity-details">
            <h2>Chính sách giao hàng của cửa hàng sugarsilkcake là gì?</h2>
            <ul>
              <li>
                Chúng tôi cố gắng giao sản phẩm mua từ Ci Store với tình trạng
                hoàn hảo và trong thời gian nhanh nhất có thể. Đơn hàng có giá
                từ <b>INR 499 trở lên</b> sẽ không bị tính phí vận chuyển.
              </li>
              <li>
                Chúng tôi cung cấp vận chuyển miễn phí cho đơn hàng có giá trị
                từ <b>$499 trở lên</b>.
              </li>
              <li>
                Thông thường, chúng tôi giao hàng trong vòng{" "}
                <b>2-7 ngày làm việc</b> trên toàn Ấn Độ (trong điều kiện bình
                thường).
              </li>
            </ul>
          </div>
          <div className="shipping-polity-details">
            <h2>Nếu đơn hàng của tôi bị hủy thì sao?</h2>
            <ul>
              <li>
                Nếu đơn hàng trả trước của bạn bị hủy, mất hoặc không giao được,
                chúng tôi sẽ hoàn trả đầy đủ (bao gồm cả phí vận chuyển) vào tài
                khoản gốc của bạn theo chính sách của công ty.
              </li>
              <li>
                Chúng tôi sẽ mất <b>2-5 ngày làm việc</b> để hoàn trả tiền cho
                bạn.
              </li>
              <li>
                Trước khi hủy bất kỳ đơn hàng sản phẩm nào, vui lòng kiểm tra
                chính sách hủy hàng của sản phẩm đó nếu có quy định cụ thể. Nói
                chung,{" "}
                <b>
                  chúng tôi cắt giảm phí giao hàng đối với các đơn hàng bị hủy.
                </b>
              </li>
            </ul>
          </div>
          <div className="shipping-polity-details">
            <h2>
              Phí thu tiền khi giao hàng (COD) bổ sung đối với sản phẩm Sugar
              Cake là bao nhiêu?
            </h2>
            <ul>
              <li>
                COD có sẵn cho tất cả các sản phẩm, ngoại trừ sản phẩm kỹ thuật
                số.
              </li>
              <li>
                Trong trường hợp có thay đổi, bạn có thể liên hệ với bộ phận hỗ
                trợ khách hàng của chúng tôi qua: <b>sugarsilkcake@gmai.com</b>
              </li>
              <li>
                *Giá trị đơn hàng được tính sau khi áp dụng tất cả các giảm giá
                có liên quan.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicy;
