import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

const Footer = () => {
	return (
		<>
			<div className='footer'>
				<div className='footer-top container'>
					<div className='footer-left'>
						<h2>Sugar Silk - Cake Shop</h2>
						<p>
							We (Sugar Silk ) are providing good quality cake in
							low price. Here you can buy quality cake in low
							price. You can buy anything from our App and
							Website.
						</p>
						<div className='l-footer-item'>
							<IoCallOutline />
							<span>Hotline 24/7:</span>
							<h2>0945337450</h2>
						</div>
						<div className='l-footer-item'>
							<IoHomeOutline />
							<span>
								Thu Duc, Ho Chi Minh
							</span>
						</div>
						<div className='l-footer-item'>
							<FiMail />
							<span>sugarsilkcake@gnail.com</span>
						</div>
					</div>
					<div className='footer-middle'>
						<div className='f-middle-left'>
							<h2>Help and Info</h2>
							<div className='footer-menu'>
								<NavLink to={"/about"} className='fml-menu'>
									About Us
								</NavLink>
								<NavLink to={"/contact"} className='fml-menu'>
									Contact Us
								</NavLink>
								<NavLink
									to={"/terms-conditions"}
									className='fml-menu'>
									Terms & Conditions
								</NavLink>
								<NavLink
									to={"/privacy-policy"}
									className='fml-menu'>
									Privacy Policy
								</NavLink>
								<NavLink to={"/faq"} className='fml-menu'>
									FAQ
								</NavLink>
							</div>
						</div>
						<div className='f-middle-right'>
							<h2>Important Links</h2>
							<div className='footer-menu'>
								<NavLink to={"/profile"} className='fml-menu'>
									Account
								</NavLink>
								<NavLink to={"/wishlist"} className='fml-menu'>
									Wishlist
								</NavLink>
								<NavLink to={"/cart"} className='fml-menu'>
									Your Cart
								</NavLink>
								<NavLink
									to={"/shipping-policy"}
									className='fml-menu'>
									Shipping Policy
								</NavLink>
								<NavLink to={"/sale"} className='fml-menu'>
									Sale
								</NavLink>
							</div>
						</div>
					</div>
					<div className='footer-right'>
						<h2>Sugar Silk Cake - Newsletter</h2>
						<p>
							Register now to get updates on promotions and
							coupns. Don’t worry! We not spam
						</p>
						<form
							className='form-control'
							// action='https://formspree.io/f/xbjnbred'
							method='POST'>
							<input
								type='email'
								name='email'
								className='input'
								placeholder='Enter e-mail adress'
							/>
							<button type='submit' className='btn'>
								Subscribe
							</button>
						</form>
					</div>
				</div>
				<div className='footer-bottom container'>
					<div className='footer-bottom-left'>
						<p>
							&copy;All Right Reserved{" "}
							<Link
								className='copyright-name'
								to={"#"}>
								SugarSilkCakenote
							</Link>
						</p>
					</div>
					<div className='footer-bottom-right'>
						<span>Stay Connected:</span>
						<div className='footer-social'>
							<Link
								to={
									"#"
								}>
								<FaFacebookF size={15} color='#000' />
							</Link>
							<Link to={"#"}>
								<FaXTwitter size={15} color='#000' />
							</Link>
							<Link
								to={
									"#"
								}>
								<FaInstagram size={15} color='#000' />
							</Link>
							<Link to={"#"}>
								<FaPinterestP size={15} color='#000' />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
