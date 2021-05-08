import React from "react";
import CartSummaryItem from "./CartSummaryItem/CartSummaryItem";
import Button from "../Button/Button";
import Center from "../../components/Center/Center";
import classes from "./CartSummary.module.css";

const cartSummary = (props) => (
	<div className={classes.CartSummary}>
		<CartSummaryItem right="Shipping Fee:" left="Rs 200" />
		<CartSummaryItem right="Sub Total:" left="Rs 2500" />
		<CartSummaryItem right="Total:" left="Rs 2500" />
		<hr />
		<Center>
			<Button>Checkout</Button>
		</Center>
	</div>
);

export default cartSummary;
