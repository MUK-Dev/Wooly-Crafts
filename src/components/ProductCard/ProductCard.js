import React from "react";
import sampleImage from "../../assets/wool.svg";
import Button from "../Button/Button";

const productCard = (props) => (
	<div className="card small" style={{ backgroundColor: "#eaebed" }}>
		<div className="card-image">
			<img src={sampleImage} alt="Product" />
		</div>
		<div className="card-content">
			<span className="card-title">Card Title</span>
		</div>
		<div className="card-action">
			<Button>Details</Button>
		</div>
	</div>
);

export default productCard;
