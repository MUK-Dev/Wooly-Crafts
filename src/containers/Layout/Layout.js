import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Cart from "../Cart/Cart";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<main>{this.props.children}</main>
				<Cart />
				<Footer />
			</div>
		);
	}
}

export default Layout;
