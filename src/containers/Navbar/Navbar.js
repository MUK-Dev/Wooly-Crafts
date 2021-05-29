/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min";
import Navlogo from "../../components/NavLogo/Navlogo";
import SideNav from "../../components/SideNav/SideNav";
import SideNavTrigger from "../../components/SideNavTrigger/SideNavTrigger";
import NavButtonLarge from "../../components/NavButtonLarge/NavButtonLarge";
import { connect } from "react-redux";
import * as actionTypes from "../../reducers/actions";

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
								{this.props.isUserLoggedIn ? (
									<li>
										<button
											className="waves-effect waves-purple btn"
											style={{
												backgroundColor: "#194350",
												color: "#eaebed",
												marginRight: "40px",
											}}
											onClick={this.props.logout}
										>
											<b>Logout</b>
										</button>
									</li>
								) : (
									<div>
										<li>
											<NavButtonLarge path="/login">Login</NavButtonLarge>
										</li>
										<li>
											<NavButtonLarge path="/register">Register</NavButtonLarge>
										</li>
									</div>
								)}
							</ul>
						</div>
					</nav>
				</div>
				<SideNav />
			</div>
		);
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
