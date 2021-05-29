import React from "react";
import Row from "../../Row/Row";
import classes from "./CartItem.module.css";
import { connect } from "react-redux";
import * as actionTypes from "../../../reducers/actions";

const cartItem = (props) => (
	<div className={classes.CartItem}>
		<Row>
			<div className="col s3">
				<img src={props.image} alt="Product" className={classes.CartImage} />
			</div>
			<div className="col s7">
				<div className="col">
					<p>{props.name}</p>
					<p>
						<b>Rs: </b>
						{props.price}
					</p>
				</div>
			</div>
			<div className="col s2">
				<button
					onClick={() => props.removeCart(props.name, props.price)}
					className="btn btn-floating btn-small waves-effect waves-purple"
				>
					<i className="material-icons">delete</i>
				</button>
			</div>
		</Row>
	</div>
);

const mapDispatchToProps = (dispatch) => {
	return {
		removeCart: (name, price) =>
			dispatch({
				type: actionTypes.REMOVE_FROM_CART,
				name: name,
				price: price,
			}),
	};
};

export default connect(null, mapDispatchToProps)(cartItem);
