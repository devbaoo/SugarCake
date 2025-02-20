import React from "react";
import MetaTitle from "../components/MetaTitle";

const PrivacyPolicy = () => {
	return (
		<>
			<MetaTitle title={"Our Privacy and Policies"} />
			<div className='policy-container'>
				<div className='container'>
					<h1 className='shipping-heading'>Privacy Policy</h1>
					<div className='shipping-polity-details'>
						{/* <h2>What is Sugar Cake Terms and Conditions?</h2> */}
						<ul>
							Last updated: May 5, 2024 <br />
							<br />
							This Privacy Policy describes Our policies and
							procedures on the collection, use and disclosure of
							Your information when You use the Service and tells
							You about Your privacy rights and how the law
							protects You. <br />
							<br /> We use Your Personal data to provide and
							improve the Service. By using the Service, You agree
							to the collection and use of information in
							accordance with this Privacy Policy.
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default PrivacyPolicy;
