import React from "react";
import MetaTitle from "../components/MetaTitle";

const About = () => {
	return (
		<>
			<MetaTitle title={"About: Our Company"} />
			<div className='about-container'>
				<div className='container'>
					<div className='about-content'>
						<div className='about-image-container'>
							<img
								src='public/images/quality_restoration_20250210111322142.jpg'
								alt='About Us'
								className='about-image'
							/>
						</div>
						<div className='about-text-container'>
							<span className='about-section-label'>
								About us
							</span>
							<h2 className='about-section-heading'>
								About{" "}
								<span className='company-name'>
									Our Company
								</span>
							</h2>
							<p className='about-section-description'>
								We (Sugar Cake) are providing good quality
								products in low price. Here you can buy quality
								products in low price. You can buy anything from
								our App and Website.
								<br />
								<br />
								We have a good inventory of products ranging
								from apparel to cosmetics to home utility and
								kitchen products and more. With over 40 lakh
								products and 300+ products categories, Sugar Cake
								is sure to have everything you need. <br />{" "}
								<br /> In our latest and New collections, you
								will find all the popular & trending items at an
								affordableprice, so you can be confident you're
								in the market for new clothes, accessories, or
								just some daily-use items for home, Sugar Cake has
								everything you need.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
