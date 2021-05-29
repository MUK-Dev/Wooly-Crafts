import React from "react";
import CartSummaryItem from "./CartSummaryItem/CartSummaryItem";
import Center from "../../components/Center/Center";
import classes from "./CartSummary.module.css";
import RouteButton from "../RouteButton/RouteButton";
import { connect } from "react-redux";
import * as actionTypes from "../../reducers/actions";

const cartSummary = (props) => (
	<div className={classes.CartSummary}>
		<CartSummaryItem right="Shipping Fee:" left="Rs 200" />
		<CartSummaryItem right="Total:" left={`Rs ${props.totalPrice + 200}`} />
		<Center>
			<button
				onClick={props.emptyCart}
				className="btn waves-effect waves-purple"
			>
				Empty Whole Cart<i className="material-icons left">delete_sweep</i>
			</button>
		</Center>
		<hr />
		<Center>
			<RouteButton link="/checkout">Checkout</RouteButton>
		</Center>
	</div>
);

const mapDispatchToProps = (dispatch) => {
	return {
		emptyCart: () => dispatch({ type: actionTypes.EMPTY_CART }),
	};
};

const mapStateToProps = (state) => {
	return {
		totalPrice: state.cart.totalPrice,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(cartSummary);
