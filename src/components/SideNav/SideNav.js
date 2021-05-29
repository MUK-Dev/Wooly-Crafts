import React from "react";
import NavItem from "./NavItem/NavItem";
import NavButton from "./NavButton/NavButton";
import { NavLink } from "react-router-dom";
import SizedBox from "../SizedBox/SizedBox";
import wool from "../../assets/wool.svg";
import { connect } from "react-redux";
import * as actionTypes from "../../reducers/actions";

const sideNav = (props) => (
	<ul className="sidenav sidenav-close" id="mobile-demo">
		<SizedBox width="0" height="30px" />
		<img
			src={wool}
			alt="Wool Logo"
			className="center-align"
			style={{ width: "100%", height: "70px" }}
		/>
		<NavItem path="/">
			<p>Home</p>
		</NavItem>
		<NavItem path="/contact">
			<p>Contact Us</p>
		</NavItem>
		<NavItem path="/products">
			<p>All Products</p>
		</NavItem>
		<div className="row center-align">
			<div>
				{props.isUserLoggedIn ? (
					<NavButton>
						<button
							onClick={props.logout}
							className="waves-effect waves-light btn"
							style={{ backgroundColor: "#194350" }}
						>
							Logout
						</button>
					</NavButton>
				) : (
					<div>
						<NavButton>
							<NavLink
								className="waves-effect waves-light btn"
								to="/login"
								href
								style={{ backgroundColor: "#194350" }}
							>
								Login
							</NavLink>
						</NavButton>
						<NavButton>
							<NavLink
								className="waves-effect waves-light btn"
								to="/register"
								href
								style={{ backgroundColor: "#194350" }}
							>
								Register
							</NavLink>
						</NavButton>
					</div>
				)}
			</div>
		</div>
	</ul>
);

const mapStateToProps = (state) => {
	return {
		isUserLoggedIn: state.user.validated,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch({ type: actionTypes.LOGOUT }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(sideNav);
