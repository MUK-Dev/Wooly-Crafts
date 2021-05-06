import React from "react";
import "./BigHeading.css";

const bigHeading = (props) => (
	<h3
		className="center-align BigHeading"
		style={{ margin: "0", padding: "20px" }}
	>
		{props.children}
	</h3>
);

export default bigHeading;
