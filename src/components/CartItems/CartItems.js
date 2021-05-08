import React from "react";
import CartSummary from "../CartSummary/CartSummary";
import CartItem from "./CartItem/CartItem";

const cartItems = (props) => (
	<div>
		<li>
			<CartItem />
		</li>
		<li>
			<CartItem />
		</li>
		<li>
			<CartItem />
		</li>
		<li>
			<CartItem />
		</li>
		<li>
			<CartSummary />
		</li>
	</div>
);

export default cartItems;
