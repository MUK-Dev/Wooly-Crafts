import React from "react";
import { Link } from "react-router-dom";

const routeButton = (props) => (
	<Link
		className="waves-effect waves-light btn"
		style={{ margin: "10px", backgroundColor: "#194350" }}
		to={props.link}
	>
		{props.children}
	</Link>
);

export default routeButton;
