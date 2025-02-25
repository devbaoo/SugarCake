
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useFormik } from "formik"
import * as yup from "yup"
import { FaArrowLeft } from "react-icons/fa"
import { createOrder, emptyCart } from "../features/auth/userSlice"
import MetaTitle from "../components/MetaTitle"

const checkoutSchema = yup.object({
  name: yup.string().required("Name is Required"),
  address: yup.string().required("Address is Required"),
  city: yup.string().required("City is Required"),
  state: yup.string().required("State is Required"),
  country: yup.string().required("Country is Required"),
  pincode: yup.number().required("Pincode is Required"),
})

const Checkout = () => {
  const [cartSubTotal, setCartSubTotal] = useState(null)
  const [cartTotalQuantity, setCartTotalQuantity] = useState(null)
  const [cartProductState, setCartProductState] = useState([])
  const [paymentMethod, setPaymentMethod] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      city: "",
      other: "",
      state: "",
      country: "",
      pincode: "70000",
    },
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        checkoutHandler()
      }, 300)
    },
  })
  const cartProducts = useSelector((state) => state?.auth?.getCart)

  useEffect(() => {
    let cartQuantity = 0
    let cartSum = 0
    for (let i = 0; i < cartProducts?.length; i++) {
      cartSum = cartSum + Number(cartProducts[i]?.quantity * cartProducts[i]?.price)
      cartQuantity = cartQuantity + cartProducts[i]?.quantity
    }
    setCartSubTotal(cartSum)
    setCartTotalQuantity(cartQuantity)
  }, [cartProducts])

  const orderAmount = cartSubTotal

  useEffect(() => {
    const items = []
    for (let i = 0; i < cartProducts?.length; i++) {
      items.push({
        product: cartProducts[i].productId?._id,
        quantity: cartProducts[i]?.quantity,
        price: cartProducts[i]?.price,
      })
    }
    setCartProductState(items)
    console.log("cartProducts: ", cartProducts)

  }, [cartProducts])

  const checkoutHandler = async () => {
    if (!paymentMethod) {
      alert("Vui lòng chọn phương thức thanh toán")
      return
    }

    const orderData = {
      totalPrice: orderAmount,
      priceAfterDiscount: orderAmount,
      orderItems: cartProductState,
      paymentInfo: {
        payosOrderId: `TEMP_${Date.now()}`,
        payosPaymentId: "PENDING",
      },
      shippingInfo: formik.values,
      paymentMethod: paymentMethod,
    }


    dispatch(createOrder(orderData)).then((result) => {
      if (result.payload?.success) {
        dispatch(emptyCart())
        if (paymentMethod === "bank" && result.payload?.paymentData?.paymentUrl) {
          window.location.href = result.payload.paymentData.paymentUrl
        } else {
          navigate("/my-orders")
        }
      }
    })
  }

  return (
    <>
      <MetaTitle title={"Order Cart Products"} />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Thông tin giao hàng</h2>
              <Link to="/cart" className="flex items-center text-blue-600 hover:text-blue-800">
                <FaArrowLeft className="mr-2" />
                Quay lại giỏ hàng
              </Link>
            </div>
            <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Họ và tên"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Quốc gia <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="select">Chọn một quốc gia...</option>
                    <option value="USA">USA</option>
                    <option value="VN">Việt Nam</option>
                    <option value="Lao">Lào</option>
                  </select>
                  {formik.touched.country && formik.errors.country && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.country}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Địa chỉ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Số nhà và tên đường"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.address && formik.errors.address && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.address}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="other" className="block text-sm font-medium text-gray-700">
                    Khác
                  </label>
                  <input
                    type="text"
                    id="other"
                    name="other"
                    placeholder="Căn hộ, suite, đơn vị,... (tuỳ chọn)"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    value={formik.values.other}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    Thành phố <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Thành phố"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.city && formik.errors.city && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.city}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    Tỉnh / Quận <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Tỉnh / Quận"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.state && formik.errors.state && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.state}</p>
                  )}
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Đơn hàng của bạn</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Sản phẩm:</span>
                      <div>
                        {cartProducts &&
                          cartProducts.map((item) => (
                            <Link key={item._id} to={`/product/${item.productId._id}`}>
                              <p className="text-sm">
                                {`${item?.productId?.title.substr(0, 18)}...`}
                              </p>
                            </Link>

                          ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Tổng số sản phẩm:</span>
                      <span>{cartTotalQuantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tạm tính:</span>
                      <span>
                        {Number(cartSubTotal).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Số tiền đơn hàng:</span>
                      <span>
                        {Number(orderAmount).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="cod"
                      className="mr-2"
                      onChange={() => setPaymentMethod("cod")}
                      checked={paymentMethod === "cod"}
                    />
                    <label htmlFor="cod">Thanh toán khi giao hàng</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="bank"
                      name="paymentMethod"
                      value="bank"
                      className="mr-2"
                      onChange={() => setPaymentMethod("bank")}
                      checked={paymentMethod === "bank"}
                    />
                    <label htmlFor="bank">Thanh toán qua ngân hàng</label>
                  </div>
                  <p className="text-sm text-gray-600">
                    {paymentMethod === "cod"
                      ? "Thanh toán khi nhận hàng cũng có sẵn."
                      : "Chuyển hướng đến cổng thanh toán an toàn."}
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <button
              type="submit"
              onClick={formik.handleSubmit}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
            >
              Đặt hàng
            </button>
          </div>
        </div >
      </div >
    </>
  )
}

export default Checkout

