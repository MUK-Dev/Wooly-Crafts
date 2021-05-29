import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import ContactUs from "./containers/ContactUs/ContactUs";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import { Route } from "react-router";
import Products from "./containers/Products/Products";
import Product from "./containers/Product/Product";
import Checkout from "./containers/Checkout/Checkout";
import * as actionTypes from "./reducers/actions";
import { connect } from "react-redux";

class App extends Component {
	componentDidMount() {
		const token = localStorage.getItem("token");
		const userData = JSON.parse(localStorage.getItem("userData"));
		const expiration = localStorage.getItem("expiration");
		const cartItems = JSON.parse(localStorage.getItem("cartItems"));
		const totalPrice = parseInt(localStorage.getItem("totalPrice"));
		if (token && userData && new Date(expiration) > new Date()) {
			this.props.getUser(userData, token);
		}
		if (
			token &&
			userData &&
			new Date(expiration) > new Date() &&
			cartItems &&
			totalPrice
		) {
			this.props.getCart(cartItems, totalPrice);
		}
	}

	render() {
		return (
			<div className="App">
				<Layout>
					<Route path="/" exact component={Home} />
					<Route path="/contact" exact component={ContactUs} />
					<Route path="/checkout" exact component={Checkout} />
					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
					<Route path="/products" exact component={Products} />
					<Route path="/products/:productId" exact component={Product} />
				</Layout>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getUser: (user, token) =>
			dispatch({
				type: actionTypes.GET_TOKEN,
				user: user,
			}),
		getCart: (cart, price) =>
			dispatch({ type: actionTypes.GET_CART, cartItems: cart, price: price }),
	};
};

export default connect(null, mapDispatchToProps)(App);
