import React from "react";
import { Link } from "react-router-dom";

const iconButton = (props) => (
	<Link
		to={props.path}
		className="waves-effect waves-light btn"
		onClick={props.clicked}
		style={{ backgroundColor: "#ff8882" }}
	>
		<i className="material-icons left">{props.iconType}</i>
		{props.children}
	</Link>
);

export default iconButton;
