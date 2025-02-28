import axios from "axios";
import { base_url } from "../utils/base_url";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyMail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2];
  const verifyHandler = async () => {
    try {
      const response = await axios.put(`${base_url}user/verify/${id}`);
      if (response.data?.success) {
        toast.success("Xác nhận email thành công");
        setTimeout(() => {
          navigate("/sign-in");
        }, 600);
      }
    } catch (error) {
      console.error("Xác minh thất bại:", error);
    }
  };

  return (
    <>
      <div className="verify-container">
        <div className="container mail-section">
          <div className="verify-mail">
            <h2>Xác nhận địa chỉ email của bạn</h2>
            <p>
              Nhấn nút bên dưới để xác nhận địa chỉ email của bạn. Nếu bạn không
              tạo tài khoản, bạn có thể bỏ qua email này một cách an toàn.
            </p>
            <button onClick={verifyHandler}>Xác nhận Email</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyMail;
