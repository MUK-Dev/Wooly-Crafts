import React from "react";
import NavItem from "./NavItem/NavItem";
import NavButton from "./NavButton/NavButton";
// import { a } from "react-router-dom";

const sideNav = (props) => (
	<ul className="sidenav sidenav-close" id="mobile-demo">
		<NavItem link="/">
			<p>Home</p>
		</NavItem>
		<NavItem link="/writeArticle">
			<p>New Article</p>
		</NavItem>
		<div className="row center-align">
			{props.isValid ? (
				<NavButton>
					<button
						className="waves-effect waves-light btn indigo"
						onClick={props.onLogout}
					>
						Logout
					</button>
				</NavButton>
			) : (
				<div>
					<NavButton>
						<a className="waves-effect waves-light btn indigo" to="/login">
							Login
						</a>
					</NavButton>
					<NavButton>
						<a className="waves-effect waves-light btn indigo" to="/register">
							Register
						</a>
					</NavButton>
				</div>
			)}
		</div>
	</ul>
);

export default sideNav;
