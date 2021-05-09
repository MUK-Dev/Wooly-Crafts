import React from "react";
import { NavLink } from "react-router-dom";

const navButtonsLarge = (props) => (
	<NavLink
		className="waves-effect waves-purple btn"
		style={{ backgroundColor: "#194350", color: "#eaebed" }}
		to={props.path}
	>
		<b>{props.children}</b>
	</NavLink>
);

export default navButtonsLarge;
