import React from "react";
import MetaTitle from "../components/MetaTitle";

const ShippingPolicy = () => {
	return (
		<>
			<MetaTitle title={"Our Shipping Policies"} />
			<div className='shipping-container'>
				<div className='container'>
					<h1 className='shipping-heading'>Shipping Policy</h1>
					<div className='shipping-polity-details'>
						<h2>What is sugarsilkcake Store Shipping Policy?</h2>
						<ul>
							<li>
								We strive to deliver products purchased from Ci
								Store in excellent condition and in the fastest
								possible time. The order with the pricing of{" "}
								<b>INR 499 or above</b> will have no shipping
								charges.
							</li>
							<li>
								We provide free shipping for orders with a value
								of <b>$499 or above.</b>
							</li>
							<li>
								We usually deliver the products within{" "}
								<b>2-7 business days</b>, across all over India
								(under normal circumstances).
							</li>
						</ul>
					</div>
					<div className='shipping-polity-details'>
						<h2>What if my order is Cancelled?</h2>
						<ul>
							<li>
								If your prepaid order is
								canceled/lost/undelivered, we’ll process the
								complete refund (including shipping) to your
								source account as per the company policy.
							</li>
							<li>
								We will take <b>2-5 business days</b> to give
								you refund.
							</li>
							<li>
								Before cancelling any product order please check
								the cancelation policy of that products if any
								specific. Generally{" "}
								<b>
									we cut the delivery chages on cancelled
									orders.
								</b>
							</li>
						</ul>
					</div>
					<div className='shipping-polity-details'>
						<h2>
							What are the additional COD charges on Sugar Cake
							products?
						</h2>
						<ul>
							<li>
								COD available in all products. Except digital
								products.
							</li>
							<li>
								In case of a change in plan, you can reach out
								to our customer support on :{" "}
								<b>sugarsilkcake@gmai.com</b>
							</li>
							<li>
								*Order value is calculated after adjusting all
								the applicable discount(s).
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default ShippingPolicy;
