import React from "react";
import MetaTitle from "../components/MetaTitle";

const PrivacyPolicy = () => {
  return (
    <>
      <MetaTitle title={"Chính sách bảo mật của chúng tôi"} />
      <div className="policy-container">
        <div className="container">
          <h1 className="shipping-heading">Chính sách bảo mật</h1>
          <div className="shipping-polity-details">
            <ul>
              Cập nhật lần cuối: 22 tháng 02, 2025<br />
              <br />
              Chính sách bảo mật này mô tả các chính sách và thủ tục của chúng
              tôi về việc thu thập, sử dụng và tiết lộ thông tin của Quý vị khi
              sử dụng Dịch vụ, cũng như thông tin về quyền riêng tư của Quý vị
              và cách pháp luật bảo vệ Quý vị. <br />
              <br />
              Chúng tôi sử dụng dữ liệu cá nhân của Quý vị để cung cấp và cải
              thiện Dịch vụ. Bằng cách sử dụng Dịch vụ, Quý vị đồng ý với việc
              thu thập và sử dụng thông tin theo Chính sách bảo mật này.
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
