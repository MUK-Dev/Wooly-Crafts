import React from "react";
import Button from "../Button/Button";
import classes from "./ProductCard.module.css";
import { connect } from "react-redux";
import * as actionTypes from "../../reducers/actions";
import * as links from "../../serverLink";

const productCard = (props) => {
	const image = `${links.serverLink}${props.image}`;
	const addCartHandler = () => {
		props.addToCart(props.title, props.price, image);
	};
	return (
		<div
			className={["card", classes.FadeIn].join(" ")}
			style={{ backgroundColor: "#eaebed" }}
		>
			<div className="card-image">
				<img src={image} alt="Product" className={classes.Image} />
				<button
					onClick={addCartHandler}
					className="btn-floating halfway-fab waves-effect waves-purple"
					style={{ backgroundColor: "#ff8882" }}
				>
					<i className="material-icons">add_shopping_cart</i>
				</button>
			</div>
			<div className="card-content">
				<span className="card-title" style={{ fontSize: "20px" }}>
					{props.title}
				</span>
				<p>
					<b>Price Rs: </b>
					{props.price}
				</p>
				{props.sold ? (
					<p>
						<b>Out Of Stock</b>
					</p>
				) : (
					<p>
						<b>Available</b>
					</p>
				)}
			</div>
			<div className="card-action">
				<Button path={`/products/${props.productId}`}>Details</Button>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (name, price, imageUrl) =>
			dispatch({
				type: actionTypes.ADD_TO_CART,
				name: name,
				price: price,
				image: imageUrl,
			}),
	};
};

export default connect(null, mapDispatchToProps)(productCard);
