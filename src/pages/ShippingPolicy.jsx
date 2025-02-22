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
            <h2>Chính sách giao hàng của cửa hàng Sugar Silk Cake là gì?</h2>
            <ul>
              <li>
              Chúng tôi sẽ cố gắng giao sản phẩm mua từ Sugar Silk Cake với tình trạng hoàn hảo và trong thời gian nhanh nhất có thể.
              </li>
              <li>
              Chúng tôi sẽ hỗ trợ vận chuyển miễn phí cho đơn hàng trên 200.000(VNĐ) trong nội thành TP HCM hoặc trên 100.000(VNĐ) khu vực Quận 9.
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
              COD có sẵn cho tất cả các sản phẩm của Sugar Silk Cake.
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
