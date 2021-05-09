/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min";
import Navlogo from "../../components/NavLogo/Navlogo";
import SideNav from "../../components/SideNav/SideNav";
import SideNavTrigger from "../../components/SideNavTrigger/SideNavTrigger";
import NavButtonLarge from "../../components/NavButtonLarge/NavButtonLarge";

class Navbar extends Component {
	componentDidMount() {
		document.addEventListener("DOMContentLoaded", function () {
			var elems = document.querySelectorAll(".sidenav");
			// eslint-disable-next-line no-unused-vars
			var instances = M.Sidenav.init(elems, {});
		});
	}

	render() {
		return (
			<div>
				<div className="navbar-fixed">
					<nav>
						<div className="nav-wrapper" style={{ backgroundColor: "#ff8882" }}>
							<SideNavTrigger />
							<Navlogo />
							<ul className="right hide-on-med-and-down">
								<li>
									<NavButtonLarge path="/login">Login</NavButtonLarge>
								</li>
								<li>
									<NavButtonLarge path="/register">Register</NavButtonLarge>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<SideNav />
			</div>
		);
	}
}

export default Navbar;
