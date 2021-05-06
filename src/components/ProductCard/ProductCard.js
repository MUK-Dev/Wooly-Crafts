import React from "react";
import sampleImage from "../../assets/wool.svg";

const productCard = (props) => (
	<div className="card small">
		<div className="card-image">
			<img src={sampleImage} alt="Product" />
		</div>
		<div className="card-content">
			<span className="card-title">Card Title</span>
		</div>
		<div className="card-action">
			<a href="#" className="btn waves-effect">
				Details
			</a>
		</div>
	</div>
);

export default productCard;
