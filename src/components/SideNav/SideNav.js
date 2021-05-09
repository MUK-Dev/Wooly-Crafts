import React from "react";
import NavItem from "./NavItem/NavItem";
import NavButton from "./NavButton/NavButton";
import { NavLink } from "react-router-dom";

const sideNav = (props) => (
	<ul className="sidenav sidenav-close" id="mobile-demo">
		<NavItem path="/">
			<p>Home</p>
		</NavItem>
		<NavItem path="/contact">
			<p>Contact Us</p>
		</NavItem>
		<div className="row center-align">
			{props.isValid ? (
				<NavButton>
					<button
						className="waves-effect waves-light btn"
						onClick={props.onLogout}
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
	</ul>
);

export default sideNav;
