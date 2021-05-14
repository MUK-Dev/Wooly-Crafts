import React from "react";
import { Link } from "react-router-dom";

const button = (props) => (
	<Link
		to={props.path}
		className="waves-effect waves-light btn"
		onClick={props.clicked}
		style={{ backgroundColor: "#194350" }}
	>
		{props.children}
	</Link>
);

export default button;
