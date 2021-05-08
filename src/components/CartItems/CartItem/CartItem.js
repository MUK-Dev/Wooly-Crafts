import React from "react";
import Row from "../../Row/Row";
import sampleImage from "../../../assets/wool.svg";
import classes from "./CartItem.module.css";

const cartItem = (props) => (
	<div className={classes.CartItem}>
		<Row>
			<div className="col s3">
				<img src={sampleImage} alt="Product" className={classes.CartImage} />
			</div>
			<div className="col s9">
				<div className="col">
					<p>Product Name</p>
					<p>Rs: 2500</p>
				</div>
			</div>
		</Row>
	</div>
);

export default cartItem;
