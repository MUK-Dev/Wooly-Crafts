import React from "react";
import CartSummary from "../CartSummary/CartSummary";
import CartItem from "./CartItem/CartItem";
import { connect } from "react-redux";

const cartItems = (props) => (
	<div>
		{props.cartItems.length > 0 ? (
			<div>
				{props.cartItems.map((cartItem) => {
					return (
						<li key={cartItem.name}>
							<CartItem
								image={cartItem.image}
								name={cartItem.name}
								price={cartItem.price}
							/>
						</li>
					);
				})}

				<li>
					<CartSummary />
				</li>
			</div>
		) : (
			<p className="center-align">You Selected Items will Appear here</p>
		)}
	</div>
);

const mapStateToProps = (state) => {
	return {
		cartItems: state.cart.cartItems,
	};
};

export default connect(mapStateToProps)(cartItems);
