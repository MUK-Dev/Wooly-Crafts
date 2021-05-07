import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Cart from "../Cart/Cart";

class Layout extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<main>{this.props.children}</main>
				<Cart />
			</div>
		);
	}
}

export default Layout;
