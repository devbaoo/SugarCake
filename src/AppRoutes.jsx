import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./pages/Body";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Sale from "./pages/Sale";
import Wishlist from "./pages/Wishlist";
import TrackOrder from "./pages/TrackOrder";
import TermsCondition from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import Profile from "./pages/Profile";
import Faq from "./pages/Faq";
import Checkout from "./pages/Checkout";
import { ProtectedRoutes } from "./routing/ProtectedRoutes";
import { OpenRoutes } from "./routing/OpenRoutes";
import Orders from "./pages/Orders";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyMail from "./pages/VerifyMail";

const AppRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Body />}>
						<Route index element={<Home />} />
						<Route path='/shop' element={<Shop />} />
						<Route
							path='/product/:id'
							element={<SingleProduct />}
						/>
						<Route path='/sale' element={<Sale />} />
						<Route
							path='/cart'
							element={
								<ProtectedRoutes>
									<Cart />
								</ProtectedRoutes>
							}
						/>
						<Route
							path='/profile'
							element={
								<ProtectedRoutes>
									<Profile />
								</ProtectedRoutes>
							}
						/>
						<Route
							path='/track-order/:id'
							element={
								<ProtectedRoutes>
									<TrackOrder />
								</ProtectedRoutes>
							}
						/>
						<Route
							path='/wishlist'
							element={
								<ProtectedRoutes>
									<Wishlist />
								</ProtectedRoutes>
							}
						/>
						<Route path='/contact' element={<Contact />} />
						<Route
							path='/checkout'
							element={
								<ProtectedRoutes>
									<Checkout />
								</ProtectedRoutes>
							}
						/>
						<Route
							path='/my-orders'
							element={
								<ProtectedRoutes>
									<Orders />
								</ProtectedRoutes>
							}
						/>
						<Route path='/faq' element={<Faq />} />
						<Route
							path='/shipping-policy'
							element={<ShippingPolicy />}
						/>
						<Route
							path='/privacy-policy'
							element={<PrivacyPolicy />}
						/>
						<Route
							path='/terms-conditions'
							element={<TermsCondition />}
						/>
						<Route path='/about' element={<About />} />
						<Route path='/sign-in' element={<Login />} />
						<Route path='/verify/:id' element={<VerifyMail />} />
						<Route
							path='/reset-password/:token'
							element={<ResetPassword />}
						/>
						<Route
							path='/forget-password'
							element={
								<ProtectedRoutes>
									<ForgetPassword />
								</ProtectedRoutes>
							}
						/>
						<Route
							path='/sign-up'
							element={
								<OpenRoutes>
									<SignUp />
								</OpenRoutes>
							}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default AppRoutes;
