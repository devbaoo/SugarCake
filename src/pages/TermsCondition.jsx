import React from "react";
import MetaTitle from "../components/MetaTitle";
import { Link } from "react-router-dom";

const TermsCondition = () => {
  return (
    <>
      <MetaTitle title={"Điều khoản và Điều kiện"} />
      <div className="terms-container">
        <div className="container">
          <h1 className="shipping-heading">Điều khoản và Điều kiện</h1>
          <div className="shipping-polity-details">
            <ul>
              Chào mừng đến với Sugar Cake! <br /> <br />
              Sugar Cake được quản lý và vận hành bởi{" "}
              <Link to={"#"} target={"_blank"}>
                SugarSilkCakenote
              </Link>
              . Bất kỳ cá nhân hoặc pháp nhân nào truy cập và/hoặc sử dụng theo
              bất kỳ hình thức nào (“bạn” hoặc “của bạn”) hoặc sử dụng bất kỳ
              dịch vụ, chức năng hiện tại hay tương lai hoặc ưu đãi nào được
              cung cấp trên Sugar Cake (“Dịch vụ”) sẽ phải tuân thủ các điều
              khoản và điều kiện này của chúng tôi (“Điều khoản Sử dụng”), được
              cập nhật định kỳ cùng với các điều khoản, hướng dẫn và điều kiện
              áp dụng cho Dịch vụ (“Điều khoản Dịch vụ”). Nếu các Điều khoản Sử
              dụng này không tương thích với các Điều khoản Dịch vụ, thì Điều
              khoản Dịch vụ sẽ được ưu tiên áp dụng đối với Dịch vụ liên quan.{" "}
              <br /> <br />
              Các Điều khoản Sử dụng này tạo thành một hồ sơ điện tử theo quy
              định của pháp luật hiện hành. Hồ sơ điện tử này được tạo ra bởi hệ
              thống máy tính và không yêu cầu chữ ký vật lý hay kỹ thuật số. Vui
              lòng đọc kỹ các Điều khoản Sử dụng này trước khi sử dụng hoặc truy
              cập Sugar Cake hoặc bất kỳ Dịch vụ nào. Bằng cách sử dụng Sugar
              Cake hoặc bất kỳ Dịch vụ nào, bạn đồng ý bị ràng buộc bởi các Điều
              khoản Sử dụng này.
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsCondition;
