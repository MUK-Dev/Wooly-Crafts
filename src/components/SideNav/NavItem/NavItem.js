import React from "react";
import { NavLink } from "react-router-dom";

const navItem = (props) => (
	<li>
		<NavLink to={props.path} activeClassName="active">
			{props.children}
		</NavLink>
	</li>
);

export default navItem;
