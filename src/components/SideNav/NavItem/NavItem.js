import React from "react";
// import { NavLink } from "react-router-dom";

const navItem = (props) => (
	<li>
		<a to={props.link} activeClassName="active">
			{props.children}
		</a>
	</li>
);

export default navItem;
