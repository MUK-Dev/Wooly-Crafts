import React from "react";
import CartSummaryItem from "./CartSummaryItem/CartSummaryItem";
import Center from "../../components/Center/Center";
import classes from "./CartSummary.module.css";
import RouteButton from "../RouteButton/RouteButton";

const cartSummary = (props) => (
	<div className={classes.CartSummary}>
		<CartSummaryItem right="Shipping Fee:" left="Rs 200" />
		<CartSummaryItem right="Sub Total:" left="Rs 2500" />
		<CartSummaryItem right="Total:" left="Rs 2500" />
		<hr />
		<Center>
			<RouteButton link="/checkout">Checkout</RouteButton>
		</Center>
	</div>
);

export default cartSummary;
