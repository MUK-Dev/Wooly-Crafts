/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min";
import "./Cart.css";

export default class Cart extends Component {
	componentDidMount() {
		document.addEventListener("DOMContentLoaded", function () {
			var elems = document.querySelectorAll("#cart");
			// eslint-disable-next-line no-unused-vars
			var instances = M.Sidenav.init(elems, {
				edge: "right",
			});
		});
	}
	render() {
		return (
			<div>
				<div className="fixed-action-btn">
					<div className="CartCounter">0</div>
					<a
						href="#"
						data-target="cart"
						className="waves-effect waves-light btn btn-floating btn-large sidenav-trigger"
						style={{ backgroundColor: "#ff8882" }}
					>
						<i className="material-icons">shopping_cart</i>
					</a>
				</div>
				<ul className="sidenav sidenav-close" id="cart">
					<li>Cart 1</li>
					<li>Cart 2</li>
					<li>Cart 3</li>
				</ul>
			</div>
		);
	}
}
