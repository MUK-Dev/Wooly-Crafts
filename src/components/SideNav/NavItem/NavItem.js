import React from "react";
import { NavLink } from "react-router-dom";

const navItem = (props) => (
	<li>
		<NavLink to={props.path} style={{ color: "#194350", fontWeight: "700" }}>
			{props.children}
		</NavLink>
	</li>
);

export default navItem;
